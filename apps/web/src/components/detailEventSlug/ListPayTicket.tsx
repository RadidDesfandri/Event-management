import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { MdAccessTimeFilled } from "react-icons/md";
import * as yup from "yup";
import { IEvent } from "../types/event";
import ConvertToIDR from "../utils/ConvertToIDR";
import { formatDateID, formatTimeID } from "../utils/FormatDate";
import { createTransaction } from "../libs/action/transaction";
import { navigate } from "../libs/action/server";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const validationShema = yup.object().shape({
  qty: yup.number().min(1, "Minimal 1 tiket").required("Masukkan tiket"),
});

const ListPayTicket = async ({ data }: { data: IEvent }) => {
  const event = data.Ticketing;
  const onTransaction = async (qty: number) => {
    const { result } = await createTransaction(data.id!, qty);
    // console.log(result.msg);
    toast.info(result.msg)
    if (result.transaction.finalPrice > 0) {
      navigate(result.data.redirect_url);
    } else {
      toast.info(result.msg)
      navigate("/profile/ticket")
    }

    try {
    } catch (error) {
      // console.log(error);
      toast.info(result.msg)
    }
  };

  return (
    <Formik
      initialValues={{ qty: 0 }}
      validationSchema={validationShema}
      onSubmit={(values, action) => {
        // alert(JSON.stringify(values));
        onTransaction(values.qty);
        action.resetForm();
      }}
    >
      {() => {
        return (
          <Form>
            <main className="flex flex-col items-center justify-between gap-6 px-5 py-5 lg:flex-row lg:items-start">
              {/* Section tiket start */}
              <section className="flex w-full flex-col items-center gap-4 lg:w-[550px]">
                {event!.map((item) => {
                  const free =
                    item?.price == "0" ? "Gratis" : ConvertToIDR(item.price);
                  const type = item?.price == "0" ? "Gratis" : "Berbayar";
                  const date = formatDateID(item?.endDate!);
                  const time = formatTimeID(item?.endDate!);
                  return (
                    <div className="relative h-[190px] w-full rounded-lg border border-blue-800 px-8 py-4">
                      <div className="absolute bottom-12 left-[-8px] h-8 w-8 rotate-45 rounded-full border-r border-t border-r-blue-700 border-t-blue-700 bg-white"></div>
                      <div className="absolute bottom-12 right-[-8px] h-8 w-8 -rotate-45 rounded-full border-l border-t border-l-blue-700 border-t-blue-700 bg-white"></div>

                      <div className="w-full pb-5">
                        <h1 className="text-lg text-gray-900">
                          {item.nameTicket}
                        </h1>
                        <h2 className="pb-5 text-sm text-gray-600">{type}</h2>
                        <div className="flex items-center gap-2 text-sm text-blue-700">
                          <MdAccessTimeFilled className="text-lg" />
                          <p>{`Berakhir dalam ${date} ${time}`}</p>
                        </div>
                      </div>

                      <div className="flex justify-between border-t border-dashed border-t-black pt-5 font-semibold">
                        <p>{free}</p>
                        <div className="flex flex-col items-center">
                          <Field
                            name="qty"
                            type="number"
                            className="w-10 rounded-md border-2 text-center [appearance:textfield] placeholder:text-center focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            placeholder="0"
                          />
                          <ErrorMessage
                            name="qty"
                            component="div"
                            className="text-[8px] text-red-600"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </section>
              {/* Section tiket end */}

              {/* Section Pesan tiket laptop start */}
              <section className="hidden h-[150px] w-[310px] rounded-lg bg-white p-6 shadow-md lg:block">
                <div className="flex items-center justify-between pb-4">
                  <p className="text-sm text-gray-500">{`Jumlah (0 tiket)`}</p>
                  <p className="text-lg font-bold text-black">Rp </p>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-500 px-3 py-2 font-semibold text-white shadow-lg shadow-blue-500/50 transition-all duration-150 hover:bg-blue-600"
                >
                  Pesan Sekarang
                </button>
              </section>
              {/* Section Pesan tiket laptop end */}

              {/* Section Pesan tiket mobile start */}
              <section className="block h-[150px] w-full rounded-lg bg-white p-6 shadow-md lg:hidden">
                <div className="flex items-center justify-between pb-4">
                  <p className="text-sm text-gray-500">{`Jumlah (0 tiket)`}</p>
                  <p className="text-lg font-bold text-black">{ }</p>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-500 px-3 py-2 font-semibold text-white shadow-lg shadow-blue-500/50 transition-all duration-150 hover:bg-blue-600"
                >
                  Pesan Sekarang
                </button>
              </section>
              {/* Section Pesan tiket mobile end */}
            </main>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ListPayTicket;
