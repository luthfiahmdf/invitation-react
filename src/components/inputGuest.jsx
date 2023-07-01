import { Modal, Form, Input, Select } from "antd";
import axios from "axios";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../config/firebaseConfig";
import { useState, useEffect } from "react";
const InputGuest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guests, setGuests] = useState([]);
  const { TextArea } = Input;

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addGuest = async (values) => {
    try {
      const docRef = await addDoc(collection(firestore, "guests"), values);
      console.log("Guest added to Firestore with ID:", docRef.id);
      // Lakukan tindakan lain setelah berhasil menambahkan tamu ke Firestore
    } catch (error) {
      console.error("Error adding guest to Firestore:", error);
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    addGuest(values);
  };
  const fetchGuests = async () => {
    try {
      const response = await axios.get(
        "https://firestore.googleapis.com/v1/projects/wedding-b3256/databases/(default)/documents/guests"
      );
      const guestList = response.data.documents.map((doc) => ({
        id: doc.name.split("/").pop(),
        ...doc.fields,
      }));
      setGuests(guestList);
      console.log(guestList);
    } catch (error) {
      console.error("Error fetching guests from Firestore:", error);
    }
  };
  useEffect(() => {
    fetchGuests();
  }, []);
  return (
    <>
      <div className="slicer flex justify-center items-center mt-4 flex-col">
        <button
          className="bg-slate-700  p-3 text-white rounded-md"
          onClick={showModal}
        >
          Beri Ucapan 🎉
        </button>
        <Modal
          title="Beri Ucapan 🎉"
          footer={null}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            name="basic"
            layout="vertical"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Nama"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Absen"
              name="absen"
              rules={[
                {
                  required: true,
                  message: "Please input your Absent!",
                },
              ]}
            >
              <Select>
                <Select.Option value="Hadir">Hadir</Select.Option>
                <Select.Option value="Tidak Hadir">Tidak Hadir</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please input your Message!",
                },
              ]}
            >
              <TextArea rows={6} />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <button className="p-2 w-24 bg-slate-700 text-white rounded-lg">
                Submit
              </button>
            </Form.Item>
          </Form>
        </Modal>
        <div className="ucapan mt-4 p-2">
          <h1 className="font-dancing text-2xl p-4">Ucapan - Ucapan</h1>

          <div className="message  w-[80vw] px-3  border-2 p-2 ">
            {guests.map((items) => (
              <div className="mess mt-3" key={items.id}>
                <div className="name flex flex-row space-x-2">
                  <h1 className="font-bold">{items.name.stringValue} </h1>
                  <h1>{items.absen.stringValue}</h1>
                </div>
                <h1>{items.message.stringValue}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default InputGuest;
