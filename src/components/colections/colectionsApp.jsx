import { Container } from 'components/App/App.styled';
import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { MaterialForm } from './MaterialForm/MaterialForm';
import { MaterialsList } from './Materials/MaterialsList';
import * as API from './services/api';

export class ColectionsApp extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  addMaterials = async values => {
    try {
      this.setState({ isLoading: true });
      const material = await API.addMaterial(values);
      this.setState(state => ({ materials: [material, ...state.materials] }));
      this.setState({ isLoading: false });
      console.log(material);
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }

    // додаєм новий метеріал
  };

  deleteMaterials = async id => {
    try {
      console.log(id);
      await API.deleteMaterials(id);
      this.setState(state => ({
        materials: state.materials.filter(material => material.id !== id),
      }));
    } catch (error) {}
  };

  updatematerial = async fields => {
    try {
      const updetedMaterial = await API.updatematerial(fields);
      this.setState(state => ({
        materials: state.materials.map(material =>
          material.id === fields.id ? updetedMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  render() {
    const { materials, isLoading, error } = this.state;
    return (
      <Container>
        <GlobalStyle />
        {error && <p>ERROR!</p>}
        <div>COLECTIONS</div>
        <MaterialForm onSubmit={this.addMaterials} isSubmiting={isLoading} />
        <MaterialsList
          items={materials}
          onDelete={this.deleteMaterials}
          upDate={this.updatematerial}
        />
      </Container>
    );
  }
}
