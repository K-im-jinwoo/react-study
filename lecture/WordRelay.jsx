const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("김진우");
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === e.target.children.word.value[0]) {
      setResult('딩동댕');
      setWord(e.target.children.word.value);
      e.target.children.word.value = '';
      inputRef.current.focus();
    } else {
        setResult('땡');
      e.target.children.word.value ='';
        inputRef.current.focus()
    }
  };


    return (
      <>
        <div>{word}</div>
        <form onSubmit={onSubmitForm}>
          <input ref={inputRef} id="word" />
          <button>클릭!!!</button>
        </form>
        <div>{result}</div>
      </>
    );
  }

module.exports = WordRelay;