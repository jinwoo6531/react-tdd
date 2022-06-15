import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HabitAddForm from '../habitAddForm';

describe('HabitAddForm', () => {
  let onAdd;
  let input;
  let button;


  beforeEach(() => {
    onAdd = jest.fn();

    render(<HabitAddForm onAdd={onAdd} />);

    //화면에 보여지는 input
    input = screen.getByPlaceholderText('Habit');

    //버튼 value값
    button = screen.getByText('Add');
  })

  it('버튼이 클릭하면 onAdd를 호출한다.', () => {
  
    //userEvent는 사용자가 직접 마우스를 클릭한것마냥 효과를줌
    userEvent.type(input, 'New Habit'); //input에 New Habit를 입력하는 상황
    userEvent.click(button); //유저가 버튼을 누름

    expect(onAdd).toHaveBeenCalledWith('New Habit');
  });

  it('텅텅빈 문자열이라면 onAdd를 호출하지 않는다.', () => {
    userEvent.type(input, '');
    userEvent.click(button);

    expect(onAdd).toHaveBeenCalledTimes(0); //0번 호출
  })
})