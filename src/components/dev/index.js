function User({ name, idade, pais }) {
  return (
    <div>
      <h1>Dev {name}</h1>
      <p>País: {pais}</p>
      <p>Idade: {idade}</p>
    </div>
  );
}

export default User;
