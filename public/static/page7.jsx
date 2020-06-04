import { Block, Stack, Button, SkipNext, ThemeProvider } from 'newskit';
import { TextBlock } from '../../components/coming-soon-in-newskit';
import page7Theme from './page7-theme';

export default () => (
  <ThemeProvider theme={page7Theme}>
    <div>
      <Block margin="spaceStack040">
        <TextBlock
          as="h2"
          overrides={{ typePreset: 'heading050', stylePreset: 'contrastText' }}
        >
          Standard Digital
        </TextBlock>
      </Block>
      <Block margin="spaceStack050">
        <TextBlock
          overrides={{ typePreset: 'body010', stylePreset: 'subtleText' }}
        >
          For those who want to read The Times &amp; The Sunday Times on the go.
        </TextBlock>
      </Block>
      <Block margin="spaceStack030">
        <TextBlock
          as="h3"
          overrides={{ typePreset: 'heading050', stylePreset: 'contrastText' }}
        >
          £15.00
        </TextBlock>
      </Block>
      <Block margin="spaceStack040">
        <TextBlock
          overrides={{ typePreset: 'label030', stylePreset: 'subtleText' }}
        >
          a month, monthly rolling contract.
        </TextBlock>
      </Block>
      <Stack flow="horizontal-center" stackDistribution="flex-start">
        <Button stylePreset="buttonOutlinedPrimary">Subscribe</Button>
        <Button stylePreset="buttonMinimalPrimary">
          View Benefits <SkipNext />
        </Button>
      </Stack>
    </div>
  </ThemeProvider>
);