import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function getName(mahasiswa){
    return 'Nama ' + mahasiswa.nama + ', NIM ' + mahasiswa.nim;
}

function selamatDatang(mahasiswa){
    if(mahasiswa.angkatan = 2018){
        return "Selamat Datang Maba " + mahasiswa.nama;
    }
    else{
        return ". . ."
    }
}

const mahasiswi = {
    nama: 'Pinta',
    nim: '12345',
    angkatan: 2018
};

// const element = (
//     <h1>{selamatDatang(mahasiswi)}</h1>
// )

//const nama = 'Pintataa';
//const element = <h1>Hello, {nama}</h1>;

//ReactDOM.render(element, document.getElementById('root'));

function tick(){
    const element = (
        <div>
            <h1>{selamatDatang(mahasiswi)}</h1>
            <h2>Ini {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
