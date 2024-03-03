import React, { useState } from 'react'
import s from './Searchbar.module.css'

export const Searchbar = ({ handleSetQuery }) => {

    const [searchValue, setSearchValue] = useState('');

    const handleChangeValue = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSetQuery(searchValue)
    }

    return (
        <header className={s.searchbar}>
            <form className={s.form} onSubmit={handleSubmit}>
                <button type="submit" className={s.button}>
                    <span className={s.button_label}>Search</span>
                </button>
                <input
                    className={s.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchValue}
                    onChange={handleChangeValue}
                />
            </form>
        </header>
    );
 }

// export default class Searchbar extends Component {

//     state = {
//         searchValue: '',
//     }


//     handleChangeValue = (e) => {
//         this.setState({searchValue:e.target.value})
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.props.handleSetQuery(this.state.searchValue)

//     }
//   render() {
//       return (
//           <header className={s.searchbar}>
//               <form className={s.form} onSubmit={this.handleSubmit}>
//                   <button type="submit" className={s.button}>
//                       <span className={s.button_label}>Search</span>
//                   </button>
//                   <input
//                       className={s.input}
//                       type="text"
//                       autoComplete="off"
//                       autoFocus
//                       placeholder="Search images and photos"
//                       value={this.state.searchValue}
//                       onChange={this.handleChangeValue}
//                   />
//               </form>
//           </header>
//       );
//     };
// };



