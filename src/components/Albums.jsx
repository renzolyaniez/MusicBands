import React, { useState, useEffect } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import axios from 'axios'

const Albums = (props) => {

    // parameters components
    const band = props.band;
    const [isOpen, setisOpen] = useState(props.open)

    // objects define
    const [album, setAlbum] = useState(
        {
            id: 0,
            bandId: 0,
            name: "",
            year: 0
        })

    // hocks 
    const [albums, setAlbums] = useState([album])

   // variables
    const uriAlbums = "https://my-json-server.typicode.com/improvein/dev-challenge/albums";

    useEffect(() => {
        getAlbumns()
        setisOpen(true)
        console.log(band)
    }, [])

    //data access
    const getAlbumns = async () => {

        await axios.get(uriAlbums)
            .then(response => {
                setAlbums(response.data)
               
            }).catch(error => {
                console.log(error)
            })
    }

    //functions 
    const closeModal = () => {
        setisOpen(false);
    }

    return (
        <div>
            <Modal isOpen={isOpen} >

                <ModalHeader>Albums {band.name}</ModalHeader>

                <ModalBody>

                    <table className="table table-striped mt-2">
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Year</th>
                        </thead>
                        <tbody>
                            {albums.filter(a =>a.bandId==band.id).map(_albums => (
                                <tr Key={_albums.id}>
                                    <td>{_albums.id}</td>
                                    <td>{_albums.name}</td>
                                    <td>{_albums.year}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </ModalBody>

                <ModalFooter>
                    <button className="btn btn-primary" onClick={closeModal}>Close</button>
                </ModalFooter>

            </Modal>

        </div>
    )
}
export default Albums;

