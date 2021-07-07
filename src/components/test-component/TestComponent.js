function TestComponent(props) {

    const title = props.title?.toUpperCase()
    const age = props.age - 18;
    return (
        <h1>Hello from {title} with age: {age}</h1>
    )
}

export default TestComponent;