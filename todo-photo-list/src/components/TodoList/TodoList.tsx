import { Box, TextField, Typography, Input, Button } from '@mui/material';
import React, { FC, useState } from 'react';
import { Todo } from '../../../libs/common';
import { AddTodo } from '../AddTodo/AddTodo';
import { TodoItem } from '../TodoItem/TodoItem';

interface TodoListProps {
  todoItems: Todo[];
}

export const TodoList: FC<TodoListProps> = ({ todoItems }) => {

  const completeTodo = () => {

  }

  const deleteTodo = () => {

  }

  return (
    <Box sx={{ maxWidth: '800px', margin: 'auto', padding: '10px 30px' }}>
      <AddTodo />
      {!!todoItems ?
        todoItems.map((todoItem) => {
          if (todoItem)
            return <TodoItem key={todoItem.id} todoItem={todoItem} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        })
        :
        < Typography sx={{ marginTop: '10px', fontSize: '20px', textAlign: 'center' }}>Now todos</Typography>
      }

    </Box >
  )
}