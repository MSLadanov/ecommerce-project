import { ReactElement } from "react";
import { Flex } from "@components/ui/Flex";
import { TextArea } from "@components/ui/TextArea";
import { Button } from "@components/ui/Button";
import { FaCommentAlt } from "react-icons/fa";
import './style.scss';

export const RateProduct = () : ReactElement => {
    return (<Flex className="rate-product">
        <TextArea/>
        <Button styleGuide="ozon">
            <FaCommentAlt/>
        </Button>
    </Flex>)
}