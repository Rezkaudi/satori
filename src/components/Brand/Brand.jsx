'use client'

import Image from 'next/image'
import Link from 'next/link'

// styles
import Styles from './Brand.module.css'

// assets
import BrandImage from '../../../public/images/brand1.png'
import { useState } from 'react'

const Brand = () => {
    const [hidden, setHidden] = useState(false)

    const hiddenBrand = () => {
        setHidden(true)
    }

    return (
        <div className={`${Styles.brand} ${hidden ? Styles.hidden : ""}`}>
            <span className={Styles.close} onClick={hiddenBrand} >x</span>
            <Link href={'/'}>
                <Image src={BrandImage} alt={"brand"} fill={true} />
            </Link>
        </div>
    )
}

export default Brand