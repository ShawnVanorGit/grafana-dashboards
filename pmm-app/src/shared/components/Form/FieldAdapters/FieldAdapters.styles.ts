import { css } from 'emotion';
import { GrafanaTheme } from '@grafana/data';
import { stylesFactory } from '@grafana/ui';

export const getStyles = stylesFactory((theme: GrafanaTheme) => ({
  errorMessage: css`
    color: ${theme.palette.redBase};
    font-size: ${theme.typography.size.sm};
    height: ${theme.typography.size.sm};
    line-height: ${theme.typography.lineHeight.sm};
    margin-top: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.xs};
  `,
  input: css`
    input {
      /* make it consistent with platform-core input height 
      remove once using only platform-core components */
      min-height: 37px;
    }
  `,
}));
