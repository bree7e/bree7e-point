import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';
import { NewsItemComponent } from 'src/app/timeline/event-list/news-item/news-item.component';
import { NewsEvent } from 'src/app/shared/timeline-event';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterTestingModule  } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module).add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }))
  )
  .add(
    'with some emoji and action',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }))
  );

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));

storiesOf('NewsItemComponent', module)
  .addDecorator(
    moduleMetadata({
      imports: [RouterTestingModule.withRoutes([
        { path: '**', component: NewsItemComponent },
      ])],
      schemas: [],
      declarations: [],
      providers: [],
    })
  )
  .add('example 1', () => ({
    component: NewsItemComponent,
    props: {
      event: new NewsEvent(
        'Персональное предложение',
        'Кредит по паспорту на особых условиях. Предложение действительно до 31 мая 2018 г.',
        new Date(2018, 5, 5)
      )
    }
  }))
  .add('example 2', () => ({
    component: NewsItemComponent,
    props: {
      event: new NewsEvent(
        'Внимание мошенники',
        `'НИКОГДА НЕ ОТПРАВЛЯЙТЕ ДЕНЬГИ НЕЗНАКОМЫМ ЛИЦАМ НА ИХ ЭЛЕКТРОННЫЕ СЧЕТА
        Помните, что вероятность выиграть приз, не принимая участия в розыгрыше стремится к нулю, а
        вероятность возврата денег, перечисленных на анонимный электронный кошелек злоумышленников, и того
        меньше.`,
        new Date(2018, 3, 2),
        true
      )
    }
  }));
