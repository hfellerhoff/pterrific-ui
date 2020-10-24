import React from 'react';
import { Button, Divider, HorizontalView, Colors } from 'pterrific-ui';
import ExampleLayout from '../ExampleLayout';

export default function ButtonExample() {
  return (
    <ExampleLayout title="Button">
      <HorizontalView>
        <Button>Default</Button>
        <Button variantColor={Colors.Green}>Success</Button>
        <Button variantColor={Colors.Red}>Danger</Button>
      </HorizontalView>
      <Divider spacing={20} />
      <HorizontalView>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </HorizontalView>
      <Divider spacing={20} />
      <HorizontalView>
        <Button size="sm" isLoading>
          Loading
        </Button>
        <Button size="md" isLoading>
          Loading
        </Button>
        <Button size="lg" isLoading>
          Loading
        </Button>
      </HorizontalView>
      <Divider spacing={20} />
      <HorizontalView>
        <Button size="sm" isDisabled>
          Disabled
        </Button>
        <Button size="md" isDisabled>
          Disabled
        </Button>
        <Button size="lg" isDisabled>
          Disabled
        </Button>
      </HorizontalView>
      <Divider spacing={20} />
      <HorizontalView>
        <Button variantColor={Colors.Purple} variantColorWeight="200">
          Weight: 200
        </Button>
        <Button variantColor={Colors.Purple} variantColorWeight="400">
          Weight: 400
        </Button>
        <Button variantColor={Colors.Purple} variantColorWeight="600">
          Weight: 600
        </Button>
        <Button variantColor={Colors.Purple} variantColorWeight="800">
          Weight: 800
        </Button>
      </HorizontalView>
    </ExampleLayout>
  );
}
