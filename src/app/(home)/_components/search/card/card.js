import Link from 'next/link';
import React from 'react';
import './card.scss'


const Card = ({ page }) => {
    return (
        <li key={page.name} role="listitem">
            <Link href={page.link} passHref className="idsk-dropdown__option">
                {page.name}
            </Link>
        </li>
    );
}

export default Card;