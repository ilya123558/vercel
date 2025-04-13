import { useSnackbar } from 'notistack';
import { Alert, AlertColor } from '@mui/material';

export const useNotification = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleNotification = (
    type:
      | 'energy over'
      | 'throw over'
      | 'balance error'
      | 'buy success'
      | 'activeted success'
      | 'upgrade success'
  ) => {
    const map: Record<typeof type, { message: string; severity: AlertColor }> = {
      'energy over': {
        message: 'Закончилась энергия',
        severity: 'info',
      },
      'throw over': {
        message: 'Закончились броски',
        severity: 'info',
      },
      'balance error': {
        message: 'Недостаточно средств',
        severity: 'error',
      },
      'buy success': {
        message: 'Куплено',
        severity: 'success',
      },
      'activeted success': {
        message: 'Установлено',
        severity: 'success',
      },
      'upgrade success': {
        message: 'Улучшено',
        severity: 'success',
      },
    };

    const { message, severity } = map[type];

    enqueueSnackbar(message, {
      autoHideDuration: 3000,
      content: (key) => (
        <Alert
          variant="filled"
          severity={severity}
          onClose={() => closeSnackbar(key)}
        >
          {message}
        </Alert>
      ),
    });
  };

  return { handleNotification };
};