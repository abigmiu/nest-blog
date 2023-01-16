// 网站公告

import { useEffect, useState } from "react"

import { Card, Form } from "antd"

import AnnouncementInput from "./Components/AnnouncementInput"
import { IAnnouncementState } from "../../../types/website";

let cid = 0;

export default function Announcement() {
    const [list, setList] = useState<IAnnouncementState[]>([])
    const [enableMinus, setEnableMinus] = useState(true);

    useEffect(() => {
        if (!list.length) {
            addItem(-1)
        }
    }, [])

    useEffect(() => {
        // 如果列表只剩一个， 不允许删除
        setEnableMinus(list.length > 1);
    }, [list])

    const deleteItem = (id: number) => {
        if (list.length <= 1) return;
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    }

    const addItem = (id: number) => {
        const shallowCopiedAry = [...list];
        let index = list.findIndex((item) => item.id === id);
        const newItem: IAnnouncementState = {
            id: cid++,
            value: '',
        }
        shallowCopiedAry.splice(index + 1, 0, newItem);
        setList(shallowCopiedAry);
    }

    const onChange = (id: number, value: string) => {
        const index = list.findIndex((item) => item.id === id);
        if (index !== -1) {
            list[index].value = value;
        }
    }

    return (
        <Card>
            <div className="mx-auto max-w-screen-md">
                {
                    list.map((item) => <AnnouncementInput
                        propState={item}
                        enableMinus={enableMinus}
                        addItem={addItem}
                        deleteItem={deleteItem}
                        key={item.id}
                        onChange={onChange}
                    />)
                }
            </div>
        </Card>
    )
}