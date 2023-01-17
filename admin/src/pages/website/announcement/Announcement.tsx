// 网站公告

import { useEffect, useState } from "react"

import { Button, Card, message } from "antd"

import AnnouncementInput from "./Components/AnnouncementInput"
import { IAnnouncementState } from "../../../types/website";
import { websiteService } from "../../../services/website";

let cid = 0;

export default function Announcement() {
    const [list, setList] = useState<IAnnouncementState[]>([])
    const [enableMinus, setEnableMinus] = useState(true);

    /** 获取数据 */
    const fetchData = async () => {
        const data = await websiteService.getAnnouncement()
        if (!data.length) {
            addItem(-1)
        } else {
            const list: IAnnouncementState[] = [];
            data.forEach((item) => {
                list.push({
                    id: cid++,
                    value: item,
                })
            })
            setList(list);
        }
    }

    useEffect(() => {
        fetchData();
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


    const [submitLoading, setSubmitLoading] = useState(false)
    const onConfirm = async () => {
        setSubmitLoading(true)

        try {
            const values = list.map(item => item.value);
            await websiteService.setAnnouncement(values);
            message.success('更新成功');
        } finally {
            setSubmitLoading(false);
        }
    }

    /** 清空 */
    const onEmpty = async () => {
        setSubmitLoading(true)
        try {
            await websiteService.setAnnouncement([]);
            message.success('更新成功');
        } finally {
            setSubmitLoading(false);
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
            
            <div className="flex justify-end mt-5">
                <Button
                    loading={submitLoading}
                    onClick={onEmpty}
                >
                    清空
                </Button>
                <Button
                    className="ml-5"
                    loading={submitLoading}
                    onClick={onConfirm}
                    type="primary"
                >提交</Button>
            </div>
            
        </Card>
    )
}