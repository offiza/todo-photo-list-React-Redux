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

  console.log(todos);

  useEffect(() => {
    todos.forEach(todo => {
      if (todo.id === params.id)
        return setTodoItem(todo);
    });
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