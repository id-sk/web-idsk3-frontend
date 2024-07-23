import { scrollToTop } from "@/utils/scroll";
import { TextButton } from "@eslovensko/idsk-react";
import SvgArrowUp from '/node_modules/@eslovensko/idsk-core/src/assets/svgIcons/Navigation/arrow_upward.svg';

const ArrowUpBtn = () => {
    return (
        <TextButton
            icon={<SvgArrowUp />}
            label="Naspäť hore"
            onClick={scrollToTop}
            className="go-up-btn"
        />
    )
}

export default ArrowUpBtn;



