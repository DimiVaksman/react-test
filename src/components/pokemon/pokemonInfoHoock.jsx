import { useState, useEffect } from 'react';
import pokemonAPI from './apipok'

const Status = {
  IDLE: 'idle',
  PENDING: 'pendig',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export function PokemonInfoHoock({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setStatus(Status.PENDING);

    pokemonAPI
    .fetchPokemon(pokemonName)
    .then(pokemon => {
      setPokemon(pokemon);
      setStatus(Status.RESOLVED)
    .catch(error => {
      setError(error);
      setStatus(Status.REJECTED);
      });
    });
  }, [pokemonName]);

  //   componentDidUpdate(prevProps, prevState) {
  //     const prevName = prevProps.pokemonName;
  //     const nextName = this.props.pokemonName;

  //     if (prevName !== nextName) {
  //       this.setState({ status: 'pending'});

  //       fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
  //         .then(response => {
  //           if (response.ok) {
  //             return response.json();
  //           }
  //           return Promise.reject(
  //             new Error(`нет ${this.props.pokemonName} покемона`)
  //           );
  //         })

  //         .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
  //         .catch(error => this.setState({ error, status: 'rejected' }))
  //     }
  //   }


  if (status === Status.IDLE) {
    return <div>введите имя покемона</div>;
  }
  if (status === Status.PENDING) {
    return <div>Loading...</div>;
  }

  if (status === Status.REJECTED) {
    return <h1>{error.message}</h1>;
  }

  if (status === Status.RESOLVED) {
    return (
      <div>
        <p>{pokemon.name}</p>
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          width="300"
          alt=""
        />
      </div>
    );
  }
}
