import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1>Hangman game</h1>
      <section>
        <h2>Category</h2>
        <p>_ _ _ _</p>
      </section>

      <section>
        <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
      </section>

      <section>
        This is where the noose will be
      </section>
    </div>
  );
}

export default App;
