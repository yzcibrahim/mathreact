import React, { Component } from 'react';

class Kisiler extends Component {

    render() {
        const kisiSil=(silinecekKisi)=>{
            this.props.kisiSilme(silinecekKisi)
        }
        return (
    <div>
        {this.props.kisiler.map(
            (kisi)=>{
                return <div key={kisi.id}><button onClick={()=>{kisiSil(kisi.id)}}>Sil</button>
                {kisi.ad} - {kisi.soyad}
                </div>
            }
        )}
        
    </div>
        );
    }
}

export default Kisiler;