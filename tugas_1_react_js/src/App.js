import React, { Component } from 'react';
import MenuUtama from './Page/MenuUtama'
import MenuProduct from './Page/MenuProduct'
import MenuKontak from './Page/MenuKontak'
import MenuTentangKami from './Page/MenuTentangKami'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
          <MenuUtama/>
          <MenuProduct/>
          <MenuKontak/>
          <MenuTentangKami/>
        <Footer/>
      </div>
    );
  }
}

function Header() {
  return (
    <div>
      <h1>Ini Halaman Untuk Header</h1>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h1>Ini Halaman Untuk Footer</h1>
    </div>
  );
}
export default App;
