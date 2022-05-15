import React, { Component } from 'react';

class Toplama extends Component {
    constructor()
    {
        super();
        this.state={sayi1:0,
        sayi2:0,
        toplam:0}
    }
    render() {

        let islem="topla";
        if(this.props.islem==='+')
            {
                islem="topla";
            }
            else if(this.props.islem==='-')
            {
                islem="çıkar";
            }
            else if(this.props.islem==='/')
            {
                islem="böl";
            }
            else if(this.props.islem==='*')
            {
                islem="çarp";
            }

        const setSayi1=(event)=>{
            this.setState({sayi1:parseInt(event.target.value)});
        }

        const setSayi2=(event)=>{
            this.setState({sayi2:parseInt(event.target.value)});
        }
        const topla=()=>{
            let toplam=0;
           
                toplam=eval(this.state.sayi1+
                    this.props.islem+this.state.sayi2);
            
            this.setState({toplam:toplam})
        }

        return (
            <div>
                <input onChange={setSayi1} type='text' />+
                <input onChange={setSayi2} type='text' />
                <button onClick={topla}>{islem}</button>
                <div>{this.state.toplam}</div>
            </div>
        );
    }
}

export default Toplama;