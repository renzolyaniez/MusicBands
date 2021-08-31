import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Albumns from './Albums'

const MusicBands = () => {

    // object definition
    const member = {
        name: ""
    }
    const [genre, setGenre] = useState(
        {
            code: "",
            name: ""
        })

    const [band, setBand] = useState({
        id: 0,
        name: "",
        genreCode: "",
        year: 0,
        country: "",
        members: [member]

    })

    //hocks definition
    const [genres, setGenres] = useState([genre])
    const [viewIntegrants, setviewIntegrants] = useState(false)
    const [viewAlbums, setviewAlbums] = useState(false)
    const [search, setSearch] = useState('')
    const [bands, setBands] = useState([band])
    const [filterGen, setFilterGen] = useState("")
    const [filterName, setFilterName] = useState('')



    // variables define
    const uriBands = "https://my-json-server.typicode.com/improvein/dev-challenge/bands";
    const uriGenre = "https://my-json-server.typicode.com/improvein/dev-challenge/genre";


    useEffect(() => {
        getBands();
        getGenres();
    }, [])


    // data access
    const getBands = async () => {

        await axios.get(uriBands)
            .then(response => {
                setBands(response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    const getGenres = async () => {

        await axios.get(uriGenre)
            .then(response => {
                setGenres(response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    // functions 
    const viewIntegrant = () => {
        setviewIntegrants(!viewIntegrants);
    }
    const viewAlbum = (_band) => {
        setBand(_band);
        setviewAlbums(!viewAlbums);
        console.log(viewAlbums)
    }
    const searchingTerm = (search) => {
        return function (x) {
            
            return x.name.toLowerCase().includes(search) || !search;
        }
    }

    const genreFilter = (e) => {
        setFilterGen(e)
    }

    return (

        <div className='container'>

            <div>
                <button className="btn btn-primary mt-4" onClick={viewIntegrant} >View Integrants</button>
            </div>

            <div className="mt-2 col-md-4">
                Filters:
                <select className="form-control ml-2 mt-2"  onChange={(e) => genreFilter(e.target.value)}>
                    <option value="-">Select Genre</option>
                    {genres.map(item => (
                        <option value={item.code} > {item.name} </option>
                    )
                    )}
                </select>
            </div>

            <div className='mt-3 col-md-4'>
                <input onChange={e => setFilterName(e.target.value)} name="search" className='form-control mb-3' type="text" placeholder="Band finder by name" />
            </div>

            <table className="table table-striped mt-2">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Genre</th>
                    <th>Year</th>
                    <th>Country</th>
                </thead>
                <tbody>
                    {bands.filter(b=> b.genreCode.toLowerCase().includes(filterGen.toLowerCase())    &&  b.name.toLowerCase().includes(filterName.toLowerCase())  ).map(_bands => (
                        <tr Key={_bands.id}>
                            <td>{_bands.id}</td>
                            <td>{_bands.name}</td>
                            <td>{_bands.genreCode}</td>
                            <td>{_bands.year}</td>
                            <td>{_bands.country}</td>
                            {
                                viewIntegrants ?
                                    (
                                        <td ><b>Members</b>
                                            <br></br>
                                            {_bands.members.map(_members =>
                                                <table className="table table-hover">
                                                    <tbody>
                                                        <tr>
                                                            {_members.name}
                                                        </tr>
                                                    </tbody>

                                                </table>
                                            )}
                                        </td>

                                    )
                                    :
                                    (
                                        <td></td>
                                    )

                            }
                            <td>
                                <button className="btn btn-info btn-sm" onClick={() => viewAlbum(_bands)} >Albumns</button>
                            </td>


                        </tr>
                    ))}
                </tbody>
                <tfoot>

                </tfoot>
            </table>

            {
                viewAlbums ?
                    (
                        <Albumns band={band} open={viewAlbums} />
                    )
                    :
                    (
                        <span></span>
                    )
            }
        </div>
    )
}

export default MusicBands;
