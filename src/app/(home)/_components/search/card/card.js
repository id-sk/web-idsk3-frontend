import Link from 'next/link';
import React from 'react';
import './card.scss'

const Card = ({ page }) => {
    return (
        <div key={page.name}>
            <Link className="idsk-dropdown__option" href={page.link}>
                {page.name}
            </Link>
        </div>
    );
}

export default Card;