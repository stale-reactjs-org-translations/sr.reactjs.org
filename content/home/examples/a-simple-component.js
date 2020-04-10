class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Zdravo {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Miloše" />,
  document.getElementById('hello-example')
);