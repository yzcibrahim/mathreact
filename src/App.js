import logo from './logo.svg';
import './App.css';
import React from 'react';
import Toplama from './Toplama';
import Kisiler from './Kisiler';

class App extends React.Component{
constructor(){
  super();
  this.state={
    sayi:0,
    karesi:0,
    kisiler:[
     {id:1,ad:'ibrahim',soyad:'yazıcı'},
     {id:2,ad:'Elif',soyad:'müftüoğlu'},
     {id:3,ad:'cem',soyad:'akdemir'},
    ],
    yenikisiAd:'',
    yenikisiSoyAd:''
  }
}
  render(){

   

    const setSayi1=(event)=>{
      this.setState({sayi:event.target.value});
    }
    const hesapla=()=>{
      let sayi1=this.state.sayi;
      this.setState({karesi:sayi1*sayi1});
    }

    const kisiEkle=()=>{
      var kisiler=this.state.kisiler;

      let newId=0;
      if(kisiler.length<=0)
      newId=1;
else{
      newId=kisiler[kisiler.length-1].id+1;
}
      kisiler.push({id:newId,ad:this.state.yenikisiAd,soyad:this.state.yenikisiSoyAd});
      this.setState({kisiler:kisiler});
      this.setState({yenikisi:''})
    }
    const setKisiAd=(event)=>{
      this.setState({yenikisiAd:event.target.value});
    }

    const setKisiSoyad=(event)=>{
      this.setState({yenikisiSoyAd:event.target.value});
    }
    
    const kisiSil=(silinecekKisi)=>{
      let mevcutKiisler=this.state.kisiler;
      mevcutKiisler=mevcutKiisler.filter(c=>c.id!==silinecekKisi);
      this.setState({kisiler:mevcutKiisler});
    }

    return <div className='mycontent'>
      <input type='text' onChange={setSayi1} value={this.state.sayi} />
      <button onClick={hesapla}>Hesapla</button>
      <span>sayı={this.state.sayi}</span>
      <div>     karesi={this.state.karesi}</div>
      <div><Toplama islem="+"/></div>
      <div><Toplama islem="-"/></div>
      <div><Toplama islem="/"/></div>
      <div><Toplama islem="*"/></div>
      <div><input type='text' value={this.state.yenikisiAd} onChange={setKisiAd}  />
      <input type='text' value={this.state.yenikisiSoyAd} onChange={setKisiSoyad}  />
       <button onClick={kisiEkle}>EKle</button> </div>
      <div><Kisiler kisiSilme={kisiSil} kisiler={this.state.kisiler}/></div>
      
     </div>
  }

}

export default App;
