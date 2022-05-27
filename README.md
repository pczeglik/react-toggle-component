# React Toggle component

See it live: [React Toggle component](https://czeglik.com/react-toggle-component/)

This project has been created using:

- React
- Redux (manage app state in predictable manner)
- Typescript (for type checking)
- Create react app (for quick setup and go)

## Assumptions

- Use as little external libs / packages as possible
- Use browser form elements (input, label) instead of creating custom javascript based solution
- Solution is dedicated for modern browsers and verified in the latest versions of MS Edge, Chrome, Safari and Firefox
- Accessibility: User is able to navigate page using keyboard (Tab or Shift Tab) and select answers by pressing Space or Enter
- Correctness of answers is determined by proportion of correct answers to the total number of them
- Skip i18n on purpose. No such requirement and not too much time to spend on implementing it
- Skip unit, integration and end 2 end tests on purpose. No such requirement and not too much time to spend on implementing it

## Data representation

```
{
  question: "string",
  answers: [
    {
      correct: "boolean",
      id: "string",
      options: [
        {
          checked: "boolean",
          id: "string",
          text: "string",
        }
      ]
    }
  ],
  solutions: [
    {
      answerId: "string",
      optionId: "string",
    }
  ]
}
```

## Usage

```
import { Toggle } from "./components/Toggle";

<Toggle
  disabled={false}
  name="toggle-name"
  onChange={event => { console.log(event.target.value) }}
  options={[
    { id: "1", text: "One", checked: false, },
    { id: "2", text: "Two", checked: false, },
  ]}
/>
```
