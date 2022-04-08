import { Box, TextField, Typography, Input, Button } from '@mui/material';
import React, { FC, useState } from 'react';
import { Todo } from '../../../libs/common';
import { AddTodo } from '../AddTodo/AddTodo';
import { TodoItem } from '../TodoItem/TodoItem';

interface TodoListProps {
  todoItems: Todo[];
}

export const TodoList: FC<TodoListProps> = ({ todoItems }) => {

  return (
    <Box sx={{ maxWidth: '800px', margin: 'auto', padding: '10px 30px' }}>
      <AddTodo />
      {todoItems.length ?
        todoItems.map((todoItem) => {
          if (todoItem)
            return <TodoItem key={todoItem.id} todoItem={todoItem}  />
        })
        :
        < Typography sx={{ marginTop: '20px', fontSize: '24px', textAlign: 'center', fontWeight: '600' }}>No todos</Typography>
      }
    </Box >
  )
}