import React from 'react'
import logo from './img/logo.png'
import TextField from './text_field'
import {get} from './utils'
import Spinner from 'react-spinkit'
import {save} from './store'
import {withRouter} from 'react-router-dom'

export default withRouter( class extends React.Component {

    state = {
        enabled: true
    }

    async search() {
        const {search_string} = this.state
        if( !search_string ) return
        
        this.setState({enabled: false})    
        const mydiet = await get(`https://jsonplaceholder.typicode.com/posts?s=${search_string}`)

        // this stores the data in the store, under the name "mydiet"
        save({mydiet})
        save({search_string})

        // emulate a 2 second delay
        setTimeout( () => {
            this.props.history.push("/results")
            this.setState({enabled: true})
        }, 2000)

    }

    render() {
        const {enabled} = this.state
        const disable_form_class = enabled ? "" : "is-disabled"

        return(
            <div className={disable_form_class} style={{maxWidth: "500px", textAlign: "center", margin: "auto"}}>
                { !enabled ? <div className="float-spinner"><Spinner name="ball-clip-rotate" /></div> : null }
                <br/>
                <br/>
                <br/>
                <img alt="logo" width={272} src={logo}/>
                <br/>
                <br/>
                <TextField value={this.state.search_string} label="Search" rule={ (v) => v.length > 0} onChange={(v) => this.setState({search_string: v})}/>
                <br/>
                <div>
                    <button style={{paddingLeft: 30, paddingRight: 30}} onClick={ () => this.search()} >Fit My Diet</button>
                </div>
            </div>
        )
    }

})