import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Todo } from '../../../libs/common';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoPage = () => {
  const params = useParams();
  const { todos } = useTypedSelector((state) => state.todos);
  const [todoItem, setTodoItem] = useState<Todo>();

  useEffect(() => {
    setTodoItem(todos.find(todo => {
      return todo.id = params.id;
    }))
  }, [params])

  return (
    <Box sx={{ m: '102px auto' }}>
      {todoItem ?
        <TodoItem todoItem={todoItem} />
        :
        <Box sx={{ margin: 'auto', textAlign: 'center' }}>
          <Typography>This Page is not aviable</Typography>
        </Box>
      }
    </Box>
  )
}