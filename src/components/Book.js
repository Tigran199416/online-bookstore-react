import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'

import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'

import Header from './Header'
import DownState from './DownState'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import GetAppIcon from '@material-ui/icons/GetApp'
import SearchIcon from '@material-ui/icons/Search'
import { Button, TextField } from '@material-ui/core'
import Container from '@material-ui/core/Container';
import "./Books.css"
import GetAppTwoToneIcon from '@material-ui/icons/GetAppTwoTone';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   display: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     marginTop: '30px',
//     marginLeft: '70px',
//   },
//   cardStyle: {
//     marginLeft: '25px',
//     marginTop: '30px',
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
//   searchStyle: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     marginRight: '60px',
//     marginTop: '20px',
//   },
// }))

// function Book() {
//   const classes = useStyles()
//   const [books, setBooks] = useState([])
//   const [searchOpen, setSearchOpen] = useState(false)
//   const [searchValue, setSearchValue] = useState('')
//   const [filteredBooks, setFilteredBooks] = useState([])

//   useEffect(() => {
//     const fetchBooks = async () => {
//       const res = await axios.get(
//         'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Eo9DgGPykvV9HUjuYefUOnwlaT7FI9kT',
//       )
//       setBooks(res.data.results.books)
//     }

//     fetchBooks()
//   }, [])

//   useEffect(() => {
//     setFilteredBooks(
//       books.filter((book) => book.title.includes(searchValue.trim())),
//     )
//   }, [searchValue, books])

//   const onSerchChange = (e) => {
//     setSearchValue(e.target.value.toUpperCase())
//   }

//   const onSearch = () => {
//     if (!searchOpen) {
//       setSearchOpen(true)
//       return
//     }
//     setSearchOpen(false)
//   }

//   return (
//     <>
//       <Header />
//       <div className={classes.searchStyle}>
//         {' '}
//         {searchOpen === true && (
//           <TextField label="  Search..." onChange={onSerchChange} />
//         )}
//         <Button>
//           {' '}
//           <SearchIcon onClick={onSearch} />{' '}
//         </Button>
//       </div>
//       <div className={classes.display}>
//         {filteredBooks.map((book) => {
//           const { author, book_image, description, publisher, title } = book

//           return (
//             <>
//               <div className={classes.cardStyle}>
//                 <Card className={classes.root}>
//                   <CardHeader title={title} />
//                   <CardMedia
//                     className={classes.media}
//                     image={book_image}
//                     title="Paella dish"
//                   />

//                   <CardContent>
//                     <h3> Autor: {author}</h3>
//                   </CardContent>
//                   <CardActions disableSpacing>
//                     <IconButton aria-label="add to favorites">
//                       <FavoriteIcon />
//                     </IconButton>
//                     <IconButton aria-label="share">
//                       <GetAppIcon />
//                     </IconButton>
//                     <Typography paragraph>
//                       Description : {description}{' '}
//                     </Typography>
//                   </CardActions>
//                 </Card>
//               </div>
//             </>
//           )
//         })}
//       </div>
//       <DownState />
//     </>
//   )
// }




function Book() {
  const [books, setBooks] = useState([])
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [filteredBooks, setFilteredBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Eo9DgGPykvV9HUjuYefUOnwlaT7FI9kT',
      )
      setBooks(res.data.results.books)
    }

    fetchBooks()
  }, [])

  useEffect(() => {
    setFilteredBooks(
      books.filter((book) => book.title.includes(searchValue.trim())),
    )
  }, [searchValue, books])

  const onSerchChange = (e) => {
    setSearchValue(e.target.value.toUpperCase())
  }

  const onSearch = () => {
    if (!searchOpen) {
      setSearchOpen(true)
      return
    }
    setSearchOpen(false)
  }

  return (
    <>
      <Header />
      <Container maxWidth="70%" style={{margin: "25px", textAlign: "center"}}>
        <h1>Bestsellers of this week</h1>
        <h2>According to NYT</h2>
        {filteredBooks.map((book) => {
          const { author, book_image, description, publisher, title } = book

          return (
            <>
            <div style={{display: "inline-grid", margin: "15px", justifyContent: "space-between", width: "25%"}}>
              <div class="card">
              <div class="content">
                <div class="front">
                <img src={book_image}/>
                </div>
                <div class="back" style={{boxSizing: "initial", background: "linear-gradient(#fe6b8b, #ff8e53)", color: "#000", }} >
                <p>{title}</p>
                <p style={{fontSize: "18px", fontWeight: "bold"}}>Author: {author}</p>
                <p style={{fontSize: "16px"}}>Publisher: {publisher}</p>
                <h4>Description</h4>
                <p style={{fontSize: "16px", lineHeight: "30px"}}>{description}</p>
                <div>
                <p style={{fontWeight: "normal", fontSize: "14px", opacity: "0.7"}}>Download now</p>
                <Button><a><GetAppTwoToneIcon></GetAppTwoToneIcon></a></Button>
                </div>
                </div>
              </div>
            </div>
            </div>
            </>
          )
        })}
        </Container>
      <DownState />
    </>
  )
}





















export default Book
