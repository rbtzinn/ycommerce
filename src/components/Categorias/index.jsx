 
import React, { useEffect, useState } from "react"
import Sdk from "../../sdk"
import './categorias.css'

let html = ''
const Categorias = () => {
    const [categories, setCategories] = useState([]);

    const [banners, setBanners] = useState([])
    let ran = false
    const main = () => {
       
        if (ran) return;
        ran = true
        useEffect(() => {

            if (html != '') {
                return
            }
            const fetchData = async () => {
                const api = new Sdk();
                let active = ' active'
                setCategories(await api.getCategories())
                setBanners(await api.getBanners())
                banners.map(banner => {
                    console.log(banner)
                    html += `
                    <div class="carousel-item${active}">
                        <img
                            src="${banner.image}"
                            class="d-block w-100"
                            alt="${banner.alt}"
                        />
              </div>`
                    active = ''
                })

                document.getElementById('carousel-items').innerHTML = html

            }

            fetchData()
        })
    }
    main()
 
    return (
        <>
            <h4>Principais categorias</h4>
            <div className="container-dest rounded p-3 categorias-container d-flex mb-4 bg-light">
                {categories.map(({ slug, icon, name }) => (
                    <a className="categoria text-dark text-decoration-none" key={slug} href={`/categories/${slug}`}>
                        <div className="img" style={{ backgroundImage: `url('${icon}')` }}></div>
                        <h4>{name}</h4>
                    </a>
                ))}
            </div>
        </>
    );
};

export default Categorias;
