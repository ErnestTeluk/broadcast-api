import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { nanoid } from 'nanoid';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';

import { useMessageContext } from '../providers/MessageProvider.tsx';

const Form = styled.form`
  width: 100%;
`;

interface MessageFormValues {
  title: string;
  message: string;
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  message: Yup.string().required(),
});
export const MessageForm = () => {
  const { control, handleSubmit, reset } = useForm<MessageFormValues>({
    defaultValues: {
      title: '',
      message: '',
    },
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  const { addMessage } = useMessageContext();

  return (
    <Grid
      container
      sx={{
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        flexFlow: 'column',
        padding: '0 40px',
      }}
    >
      <Typography component="h2" variant="h6">
        Message Form
      </Typography>

      <Form
        noValidate
        onSubmit={handleSubmit(values =>
          addMessage({ id: nanoid(), ...values }),
        )}
      >
        <Controller
          name="title"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              sx={{ marginTop: '20px' }}
              error={!!error}
              {...field}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              sx={{ marginTop: '20px' }}
              error={!!error}
              {...field}
            />
          )}
        />
        <Grid
          container
          sx={{
            width: '100%',
            display: 'flex',
            marginTop: '20px',
            gap: '20px',
          }}
        >
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            sx={{ width: 'calc(50% - 10px)' }}
          >
            Send a message
          </Button>
          <Button
            onClick={() =>
              reset(
                {},
                {
                  keepErrors: false,
                  keepDirty: true,
                },
              )
            }
            type="button"
            variant="outlined"
            color="error"
            sx={{ width: 'calc(50% - 10px)' }}
          >
            Reset Form
          </Button>
        </Grid>
      </Form>
    </Grid>
  );
};
