import coreImage from "../src/assets/images/23.jpg";


export const Core_Concept = [
  {
    image: coreImage,
    title: "Core Concepts",
    description: "The core Ui building block",
  },
  {
    image: coreImage,
    title: "Core Concepts",
    description: "The core Ui building block",
  },
  {
    image: coreImage,
    title: "Core Concepts",
    description: "The core Ui building block",
  },
  {
    image: coreImage,
    title: "Core Concepts",
    description: "The core Ui building block",
  },
];

export const Examples = {
    componets: {
    title: "Componets",
    description: "Componets of React",
    code: `
        function Welcome() {
        return <h1>Hello World</h1>;
        }
        `,
  },
  jsx: {
    title: "JSX",
    description: "JSX in React is a syntax extension to javascript",
    code: `
    
        <div>
        <h1>Welcome {userName}</h1>
        <p>Time to Learn React!!</p>
        </div>
        `,
  },
  props: {
    title: "Props",
    description:
      "Props in React components accept arbitrary inputs called props",
    code: `
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }
    `,
  },
  state: {
    title: "State",
    description:
      "State is an object that holds data or information about the component",
    code: `
  function Counter(){
  const [counter, setCounter] = useState(0);
  }
  
    `,
  },
};
