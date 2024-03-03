import React, { useEffect, useState } from 'react'

import { fetchImg } from "services/api";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";

import s from './App.module.css'
import { Searchbar } from './Searchbar/Searchbar';


export const App = () => {
//   state = {
//     items: [],
//     totalImg: 0,
//     loading: false,
//     error: null,
//     page: 1,
//     query: '',
//     isOpen: false,
//     content: null,
  //   }
  
  const [items, setItems] = useState([]);
  const [totalImg, setTotalImg] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);


  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const { total, hits } = query ? await fetchImg({ page, q: query }) : await fetchImg({ page })
        if (page === 1) {
          setItems([]);
        }
        setItems(prev => [...prev, ...hits])

        setTotalImg(total)
      } catch (error) {
      }
      finally {
        setLoading(false)
      }
    };
    getData()
  }, [page, query]);
  

  const handleToggleModal = () => {
    // this.setState(prev => ({ isOpen: !prev.isOpen }))
    setIsOpen(!isOpen);
  };

  const handleSetQuery = (query) => {
    // this.setState({ query, items: [], page: 1 })
    setQuery(query);
    setItems([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    // this.setState(prev => ({ page: prev.page + 1 }));
    setPage(prev => prev + 1);

  };

  const handleSeeMoreInfo = content => {
    // this.setState({ isOpen: true, content })
    setIsOpen(true);
    setContent(content);
  };

  return (
    <div className={s.app}>
      <Searchbar handleSetQuery={handleSetQuery} />
      <ImageGallery images={items} openModal={handleSeeMoreInfo} />
        
      {loading && <Loader />}
      {items.length && items.length < totalImg && <Button onClick={handleLoadMore} />}
        
      {isOpen && <Modal closeModal={handleToggleModal} content={content}></Modal>}

    </div>
  );
}



// export class App extends Component {
//   state = {
//     items: [],
//     totalImg: 0,
//     loading: false,
//     error: null,
//     page: 1,
//     query: '',
//     isOpen: false,
//     content: null,
//   }

//   async componentDidMount() {
//     try {
//       this.setState({loading:true})
//       const {total, hits} = await fetchImg();
//       this.setState({ items: hits, totalImg: total });
//     } catch (error) {
//       this.setState({ error });
//     }
//     finally {
//       this.setState({loading:false})
//     }
//   }

//   async componentDidUpdate(prevProps, prevState) {
//     if (prevState.page !== this.state.page || prevState.query!==this.state.query) {
//       try {
//         this.setState({ loading: true });
//         const { total, hits } = await fetchImg({ page: this.state.page, q: this.state.query });
//         this.setState(prev => ({ items: [...prev.items, ...hits], totalImg: total }));

//       } catch (error) {
        
//       }
//       finally {
//       this.setState({loading:false})
//     }
//     }
    
//   }

//   handleToggleModal = () => {
// 		this.setState(prev => ({ isOpen: !prev.isOpen }))
// 	}

//   handleSetQuery = (query) => {
//     this.setState({query, items:[], page: 1})
//   }

//   handleLoadMore = () => {
//     this.setState(prev => ({ page: prev.page + 1 }));
//   }

//   handleSeeMoreInfo = content => {
// 		this.setState({ isOpen: true, content })
// 	}

//   render() {
//     const { items, loading, totalImg, isOpen, content } = this.state;
//     return (
//       <div className={s.app}>
//         <Searchbar handleSetQuery={this.handleSetQuery} />
//         <ImageGallery images={items}  openModal={this.handleSeeMoreInfo}/>
        
//         {loading && <Loader/>}
//         {items.length && items.length < totalImg && <Button onClick={this.handleLoadMore} />}
        
//         {isOpen && <Modal closeModal={this.handleToggleModal} content={content}></Modal>}

//     </div>
//     )
//   }
// }

