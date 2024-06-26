/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

function EMD() {
    return (
        <section className="container mx-auto flex flex-col gap-7 px-4 md:md:px-6 px-2">
            <h2 className="mb-5 text-center text-xl font-bold tracking-tighter sm:text-3xl">EMD Part List</h2>
            <div className="mx-auto w-full max-w-[800px]">
                <AccordionEMD />
            </div>
        </section>
    )
}

export default EMD


function AccordionEMD() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>EMD Common Parts</AccordionTrigger>
                <AccordionContent>
                    <TablWrapper>
                        <EMD_1 />
                    </TablWrapper>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger>EMD Bearing</AccordionTrigger>
                <AccordionContent>
                    <TablWrapper>
                        <Emd2 />
                    </TablWrapper>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger>EMD Critical Parts</AccordionTrigger>
                <AccordionContent>
                    <TablWrapper>
                        <Emd3 />
                    </TablWrapper>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>EMD Engine Gears</AccordionTrigger>
                <AccordionContent>
                    <TablWrapper>
                        <Emd4 />
                    </TablWrapper>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
                <AccordionTrigger>EMD Engine Parts</AccordionTrigger>
                <AccordionContent>
                    <TablWrapper>
                        <Emd5 />
                    </TablWrapper>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
                <AccordionTrigger>EMD Exhaust Assembly Products</AccordionTrigger>
                <AccordionContent>
                    <TablWrapper>
                        <Emd6 />
                    </TablWrapper>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
                <AccordionTrigger>EMD Piston Rings</AccordionTrigger>
                <AccordionContent>
                    <TablWrapper>
                        <Emd7 />
                    </TablWrapper>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
                <AccordionTrigger>EMD Radiator Assembly</AccordionTrigger>
                <AccordionContent>
                    <TablWrapper>
                        <Emd8 />
                    </TablWrapper>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
                <AccordionTrigger>EMD Traction Gears and Pinions</AccordionTrigger>
                <AccordionContent>
                    <TablWrapper>
                        <Emd9 />
                    </TablWrapper>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
                <AccordionTrigger>EMD Turbocharger Parts</AccordionTrigger>
                <AccordionContent>
                    <TablWrapper>
                        <Emd10 />
                    </TablWrapper>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
                <AccordionTrigger>EMD Camshaft Assembly and its Accessories</AccordionTrigger>
                <AccordionContent>
                    <Emd2_1 />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export const TablWrapper = ({ children }) => {
    return (
        <table className="w-full table-auto border">
            <thead className="">
                <tr className="row1 divide-x  border-b font-bold">
                    <td className="column0 style4 s px-4 md:py-4 py-2 md:whitespace-nowrap">
                        <span>SL.NO.</span>
                    </td>
                    <td className="column1 style4 md:px-6 px-2 s">
                        <span>OEM</span>
                    </td>
                    <td className="column2 style4 s md:whitespace-nowrap md:px-6 px-2">
                        <span>OEM REF #</span>
                    </td>
                    <td className="column3 style4 md:px-6 px-2 s">
                        <span>DESCRIPTION</span>
                    </td>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">{children}</tbody>
        </table>
    )
}

const EMD_1 = () => {
    return (
        <>
            <tr className="row2 divide-x ">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">1</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8028006</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Thrust Collar 645</span>
                </td>
            </tr>
            <tr className="row3 divide-x ">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">2</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8039842</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Lube Oil Line</span>
                </td>
            </tr>
            <tr className="row4 divide-x ">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">3</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8048880</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Handle Cylinder Test Valve 645 T– Handle</span>
                </td>
            </tr>
            <tr className="row5 divide-x ">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">4</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8085260</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Valve Bridge Assembly</span>
                </td>
            </tr>
            <tr className="row6 divide-x ">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">5</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8135330</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Trust Washer 645</span>
                </td>
            </tr>
            <tr className="row7 divide-x ">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">6</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8160209</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Fuel Line</span>
                </td>
            </tr>
            <tr className="row8 divide-x ">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">7</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8195996</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Flex Coupler</span>
                </td>
            </tr>
            <tr className="row9 divide-x ">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8206804</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Water Jumper 567C</span>
                </td>
            </tr>
            <tr className="row1 divide-x 0">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8414444</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Water Elbow</span>
                </td>
            </tr>
            <tr className="row1 divide-x 1">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">10</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9093027</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Water Jumper 645</span>
                </td>
            </tr>
            <tr className="row1 divide-x 2">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">11</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9319504</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Rocker Arm Assy Injector 645</span>
                </td>
            </tr>
            <tr className="row1 divide-x 3">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">12</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9319505</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Rocker Arm Assy Exhaust 645</span>
                </td>
            </tr>
            <tr className="row1 divide-x 4">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">13</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9544046</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Thrust Collar 710</span>
                </td>
            </tr>
            <tr className="row1 divide-x 5">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">14</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9546230</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Rocker Arm Assy Injector 710</span>
                </td>
            </tr>
            <tr className="row1 divide-x 6">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">15</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9546232</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Rocker Arm Assy Exhaust 710</span>
                </td>
            </tr>
            <tr className="row1 divide-x 7">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">16</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9549577</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>P Pipe 567</span>
                </td>
            </tr>
            <tr className="row1 divide-x 8">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">17</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9549578</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>P Pipe 645</span>
                </td>
            </tr>
            <tr className="row1 divide-x 9">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">18</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9581924</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Cylinder Head Ring Viton</span>
                </td>
            </tr>
            <tr className="row2 divide-x 0">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">19</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40036607</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Cylinder Test Valve 710</span>
                </td>
            </tr>
            <tr className="row2 divide-x 1">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">20</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40046561</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>P Pipe 710</span>
                </td>
            </tr>
            <tr className="row2 divide-x 2">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">21</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40102453</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Trust Washer 710</span>
                </td>
            </tr>
            <tr className="row2 divide-x 3">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">22</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8028460</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Eng Exhaust Shaft</span>
                </td>
            </tr>
            <tr className="row2 divide-x 4">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">23</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8052246</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Water Pump Shaft</span>
                </td>
            </tr>
            <tr className="row2 divide-x 5">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">24</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">10660837</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Water Outlet Pipe</span>
                </td>
            </tr>
            <tr className="row2 divide-x 6">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">25</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8175731</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Oil Seal Retainer</span>
                </td>
            </tr>
            <tr className="row2 divide-x 7">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">26</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8041658</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Cover</span>
                </td>
            </tr>
            <tr className="row2 divide-x 8">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">27</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8028222</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Plate</span>
                </td>
            </tr>
            <tr className="row2 divide-x 9">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">28</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8347993</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Tube Assy Fuel Oil Manifold</span>
                </td>
            </tr>
            <tr className="row3 divide-x 0">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">29</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8028220</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Plate</span>
                </td>
            </tr>
            <tr className="row3 divide-x 1">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">30</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9323945</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Damper Assembly</span>
                </td>
            </tr>
            <tr className="row3 divide-x 2">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">31</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8068058</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row3 divide-x 3">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">32</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8102087</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row3 divide-x 4">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">33</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8107553</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row3 divide-x 5">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">34</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8052342</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row3 divide-x 6">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">35</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8160207</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row3 divide-x 7">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">36</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8068057</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row3 divide-x 8">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">37</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8060740</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row3 divide-x 9">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">38</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8068059</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row4 divide-x 0">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">39</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">80655190</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row4 divide-x 1">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8052336</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row4 divide-x 2">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">41</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8065520</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row4 divide-x 3">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">42</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8032164</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row4 divide-x 4">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">43</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8336929</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row4 divide-x 5">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">44</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8032159</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row4 divide-x 6">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">45</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8351068</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row4 divide-x 7">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">46</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8351063</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row4 divide-x 8">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">47</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8052334</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row4 divide-x 9">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">48</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8059991</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row5 divide-x 0">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">49</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8059914</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushings</span>
                </td>
            </tr>
            <tr className="row5 divide-x 1">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">50</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>8358827 (10624471)</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD Heat Shield</span>
                </td>
            </tr>
            <tr className="row5 divide-x 2">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">51</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>9320186 (10624472)</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD Heat Shield</span>
                </td>
            </tr>
            <tr className="row5 divide-x 3">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">52</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8439800</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD Heat Shield</span>
                </td>
            </tr>
            <tr className="row5 divide-x 4">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">53</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8351251</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD Heat Shield</span>
                </td>
            </tr>
            <tr className="row5 divide-x 5">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">54</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8351254</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD Heat Shield</span>
                </td>
            </tr>
            <tr className="row5 divide-x 6">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">55</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40070997</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>VALVE, FLAT HEAD NEW HEAD</span>
                </td>
            </tr>
            <tr className="row5 divide-x 7">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">56</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9319735</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>VALVE, EXHAUST INCONEL FACED S</span>
                </td>
            </tr>
            <tr className="row5 divide-x 8">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">57</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9571255</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Cover Acc Drive</span>
                </td>
            </tr>
            <tr className="row5 divide-x 9">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">58</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9546162</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Overspeed Trip Housing</span>
                </td>
            </tr>
            <tr className="row6 divide-x 0">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">59</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9529804</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Overspeed Trip Housing</span>
                </td>
            </tr>
            <tr className="row6 divide-x 1">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">60</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8435910</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Lube Oil strainer Assembly</span>
                </td>
            </tr>
        </>
    )
}

const Emd = () => {
    return <></>
}

const Emd10 = () => {
    return (
        <>
            <tr className="row3 divide-x 94">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">1</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9528440</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Jumper Asm</span>
                </td>
            </tr>
            <tr className="row3 divide-x 95">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">2</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9528553</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Idler Shaft Assembly</span>
                </td>
            </tr>
            <tr className="row3 divide-x 96">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">3</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40062584</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Air Inlet Duct Asm</span>
                </td>
            </tr>
            <tr className="row3 divide-x 97">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">4</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40053526</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Ring Carrier</span>
                </td>
            </tr>
            <tr className="row3 divide-x 98">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">5</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9528876</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear Turbo Idler</span>
                </td>
            </tr>
            <tr className="row3 divide-x 99">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">6</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9534177</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Support</span>
                </td>
            </tr>
            <tr className="row4 divide-x 00">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">7</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9528663</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Link</span>
                </td>
            </tr>
            <tr className="row4 divide-x 01">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8261198</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Cover</span>
                </td>
            </tr>
            <tr className="row4 divide-x 02">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40008124</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Cover</span>
                </td>
            </tr>
            <tr className="row4 divide-x 03">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">10</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9582076</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Retainer</span>
                </td>
            </tr>
            <tr className="row4 divide-x 04">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">11</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8358576</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Retainer-Carrier Shaft</span>
                </td>
            </tr>
            <tr className="row4 divide-x 05">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">12</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8358575</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear Carrier Drive</span>
                </td>
            </tr>
            <tr className="row4 divide-x 06">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">13</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9528069</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Screen</span>
                </td>
            </tr>
            <tr className="row4 divide-x 07">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">14</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9534179</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Insert</span>
                </td>
            </tr>
            <tr className="row4 divide-x 08">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">15</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40051264</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Exhuast Diffuser</span>
                </td>
            </tr>
            <tr className="row4 divide-x 09">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">16</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40081662</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Spacer-outer</span>
                </td>
            </tr>
            <tr className="row4 divide-x 10">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">17</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8289044</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Clevis</span>
                </td>
            </tr>
            <tr className="row4 divide-x 11">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">18</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9528664</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Clevis</span>
                </td>
            </tr>
            <tr className="row4 divide-x 12">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">19</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9527883</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Ring Split Clamp</span>
                </td>
            </tr>
            <tr className="row4 divide-x 13">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">20</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40053532</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear-Planet</span>
                </td>
            </tr>
            <tr className="row4 divide-x 14">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">21</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40053533</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Planet Gear Set (Set of 3 Gears)</span>
                </td>
            </tr>
            <tr className="row4 divide-x 15">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">22</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9534354</td>
                <td className="column3 style18 md:px-6 px-2 md:py-4 py-2 s">
                    <span>Housing ASM</span>
                </td>
            </tr>
            <tr className="row4 divide-x 16">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">23</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9527502</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Housing Turbo Main</span>
                </td>
            </tr>
            <tr className="row4 divide-x 17">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">24</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40098637</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Heat Shield (Set of 2)</span>
                </td>
            </tr>
            <tr className="row4 divide-x 18">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">25</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">179847</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bolt-3/8-16 HEX (Set of 12)</span>
                </td>
            </tr>
            <tr className="row4 divide-x 19">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">26</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9416513</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Nut-3/8-16 Self Locking (Set of 12)</span>
                </td>
            </tr>
            <tr className="row4 divide-x 20">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">27</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">103341</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Washer 3/8 Flat (Set of 12)</span>
                </td>
            </tr>
            <tr className="row4 divide-x 21">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">28</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style9 null" />
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Assembly Process</span>
                </td>
            </tr>
            <tr className="row4 divide-x 22">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">29</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9528521</td>
                <td className="column3 md:px-6 px-2 md:py-4 py-2 style18 s">
                    <span>Support- Turbine BRG</span>
                </td>
            </tr>
            <tr className="row4 divide-x 23">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">30</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40008151</td>
                <td className="column3 style18 md:px-6 px-2 md:py-4 py-2 s">
                    <span>Idler Gear Support ASM</span>
                </td>
            </tr>
            <tr className="row4 divide-x 24">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">31</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9509341</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Support-Carrier BRG</span>
                </td>
            </tr>
            <tr className="row4 divide-x 25">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">32</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40008152</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Support-Idler Gear</span>
                </td>
            </tr>
            <tr className="row4 divide-x 26">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">33</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">82722272</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Dowel Taper (Set of 2)</span>
                </td>
            </tr>
            <tr className="row4 divide-x 27">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">34</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">103340</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Washer-5/16 Flat (Set of 2)</span>
                </td>
            </tr>
            <tr className="row4 divide-x 28">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">35</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8032716</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Nut-5/16-24 Self Locking (Set of 2)</span>
                </td>
            </tr>
            <tr className="row4 divide-x 29">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">36</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style9 null" />
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Dowelling Process</span>
                </td>
            </tr>
            <tr className="row4 divide-x 30">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">37</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40021529</td>
                <td className="column3 style18 md:px-6 px-2 md:py-4 py-2 s">
                    <span>Compr Scroll DWLG ASM</span>
                </td>
            </tr>
            <tr className="row4 divide-x 31">
                <td className="column0 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>37(a)</span>
                </td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9526753</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Scroll- Compressor</span>
                </td>
            </tr>
            <tr className="row4 divide-x 32">
                <td className="column0 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>37(b)</span>
                </td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40021528</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Support-Compr, Bearing</span>
                </td>
            </tr>
            <tr className="row4 divide-x 33">
                <td className="column0 style9 null" />
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9569408</td>
                <td className="column3 md:py-4 py-2 md:px-6 px-2 s">
                    <span>a.Support Comp BRG Cast</span>
                </td>
            </tr>
            <tr className="row4 divide-x 34">
                <td className="column0 style9 null" />
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8474750</td>
                <td className="column3 md:py-4 py-2 md:px-6 px-2 s">
                    <span>b. Inserts (Set of 19)</span>
                </td>
            </tr>
            <tr className="row4 divide-x 35">
                <td className="column0 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>37(c)</span>
                </td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8085063</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Snap Ring (Set of 2)</span>
                </td>
            </tr>
            <tr className="row4 divide-x 36">
                <td className="column0 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>37(d)</span>
                </td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8155560</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Dowel (Set of 2)</span>
                </td>
            </tr>
            <tr className="row4 divide-x 37">
                <td className="column0 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>37(e)</span>
                </td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9415586</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Pin-7/32 SL Spring</span>
                </td>
            </tr>
            <tr className="row4 divide-x 38">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">38</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style9 null" />
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Dowelling Process</span>
                </td>
            </tr>
            <tr className="row4 divide-x 39">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">39</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9534354</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Housing ASM</span>
                </td>
            </tr>
            <tr className="row4 divide-x 40">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40021529</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Compr Scroll DWLG ASM</span>
                </td>
            </tr>
        </>
    )
}

const Emd9 = () => {
    return (
        <>
            <tr className="row3 divide-x 53">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">1</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">8178812</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 65 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 54">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">2</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">8452310</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 12 tooth D77</span>
                </td>
            </tr>
            <tr className="row3 divide-x 55">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">3</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">8402408</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 63 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 56">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">4</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">9556207</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 14 tooth D77</span>
                </td>
            </tr>
            <tr className="row3 divide-x 57">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">5</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>40049185 / 8109579</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 62 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 58">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">6</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">40006705</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 15 tooth D77</span>
                </td>
            </tr>
            <tr className="row3 divide-x 59">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">7</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>40049661 / 8184341</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 61 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 60">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">8</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">9556208</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 16 tooth D77</span>
                </td>
            </tr>
            <tr className="row3 divide-x 61">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">9</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>40049660 / 8179295</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 60 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 62">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">10</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">9556209</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 17 tooth D77</span>
                </td>
            </tr>
            <tr className="row3 divide-x 63">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">11</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">8184333</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 59 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 64">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">12</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">9556210</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 18 tooth D77</span>
                </td>
            </tr>
            <tr className="row3 divide-x 65">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">13</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>40049658 / 8184378</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 58 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 66">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">14</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">9556211</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 19 tooth D77</span>
                </td>
            </tr>
            <tr className="row3 divide-x 67">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">15</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>8184325 / 40049657</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 57 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 68">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">16</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">9556212</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 20 tooth D77</span>
                </td>
            </tr>
            <tr className="row3 divide-x 69">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">17</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">8184396</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 56 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 70">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">18</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">9556213</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 21 tooth D77</span>
                </td>
            </tr>
            <tr className="row3 divide-x 71">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">19</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">8184342</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 55 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 72">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">20</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">9556214</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 22 tooth D77</span>
                </td>
            </tr>
            <tr className="row3 divide-x 73">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">21</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">8184332</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 52 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 74">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">22</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">9556215</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 25 tooth D77</span>
                </td>
            </tr>
            <tr className="row3 divide-x 75">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">23</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>40051136 / 40051133</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 63 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 76">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">24</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">8179135</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 14 tooth D31</span>
                </td>
            </tr>
            <tr className="row3 divide-x 77">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">25</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">40051132</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 62 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 78">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">26</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">8459295</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 15 tooth D31</span>
                </td>
            </tr>
            <tr className="row3 divide-x 79">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">27</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style9 null" />
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 60 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 80">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">28</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">8206504</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 17 tooth D31</span>
                </td>
            </tr>
            <tr className="row3 divide-x 81">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">29</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">40051126</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 58 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 82">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">30</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">8458508</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 15 tooth D29</span>
                </td>
            </tr>
            <tr className="row3 divide-x 83">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">31</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">40051125</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 57 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 84">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">32</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">8341961</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 16 tooth D29</span>
                </td>
            </tr>
            <tr className="row3 divide-x 85">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">33</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">40012160</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 70 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 86">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">34</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">40006706</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 17 tooth D87</span>
                </td>
            </tr>
            <tr className="row3 divide-x 87">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">35</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">40049648</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 69 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 88">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">36</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">9332201</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 18 tooth D87</span>
                </td>
            </tr>
            <tr className="row3 divide-x 89">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">37</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">40049648</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 67 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 90">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">38</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">9332202</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 19 tooth D87</span>
                </td>
            </tr>
            <tr className="row3 divide-x 91">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">39</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">40049647</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gear - 66 tooth</span>
                </td>
            </tr>
            <tr className="row3 divide-x 92">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 py-7">40</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 py-7">9332203</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>PINION Gear - 20 tooth D87</span>
                </td>
            </tr>
        </>
    )
}

const Emd8 = () => {
    return (
        <>
            <tr className="row2 divide-x 10">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">1</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">3010256</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row2 divide-x 11">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">2</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">3027016</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row2 divide-x 12">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">3</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">3036850</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row2 divide-x 13">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">4</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">3129131</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row2 divide-x 14">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">5</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">4003275</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row2 divide-x 15">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">6</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8177371</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>GASKET</span>
                </td>
            </tr>
            <tr className="row2 divide-x 16">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">7</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8177379</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>GASKET</span>
                </td>
            </tr>
            <tr className="row2 divide-x 17">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8189032</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR HEADER</span>
                </td>
            </tr>
            <tr className="row2 divide-x 18">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8194269</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>SCREEN</span>
                </td>
            </tr>
            <tr className="row2 divide-x 19">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">10</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8206614</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR HEADER</span>
                </td>
            </tr>
            <tr className="row2 divide-x 20">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">11</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8206615</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR HEADER</span>
                </td>
            </tr>
            <tr className="row2 divide-x 21">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">12</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8206685</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row2 divide-x 22">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">13</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8354198</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 23">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">14</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8354199</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 24">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">15</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8354200</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 25">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">16</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8354201</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 26">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">17</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8356205</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row2 divide-x 27">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">18</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8360146</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 28">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">19</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8360147</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 29">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">20</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8363131</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 30">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">21</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8363132</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 31">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">22</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8363133</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 32">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">23</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8363134</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 33">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">24</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8364234</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>ADAPTOR - LUBE OIL COOLER</span>
                </td>
            </tr>
            <tr className="row2 divide-x 34">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">25</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8364420</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 35">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">26</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8364421</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 36">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">27</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8366731</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row2 divide-x 37">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">28</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8377216</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 38">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">29</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8377217</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 39">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">30</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8377218</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 40">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">31</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8377219</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 41">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">32</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8389388</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row2 divide-x 42">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">33</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8412061</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>LUBE OIL COOLER ASM.</span>
                </td>
            </tr>
            <tr className="row2 divide-x 43">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">34</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8432427</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>GASKET</span>
                </td>
            </tr>
            <tr className="row2 divide-x 44">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">35</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8432428</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>SCREEN</span>
                </td>
            </tr>
            <tr className="row2 divide-x 45">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">36</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8443723</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR HEADER</span>
                </td>
            </tr>
            <tr className="row2 divide-x 46">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">37</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8443724</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR HEADER</span>
                </td>
            </tr>
            <tr className="row2 divide-x 47">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">38</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8462344</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row2 divide-x 48">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">39</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8462427</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 49">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8462428</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 50">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">41</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8462429</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 51">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">42</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8462430</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 52">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">43</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8462519</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 53">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">44</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8462520</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 54">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">45</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8462526</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 55">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">46</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8462527</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 56">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">47</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8470342</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 57">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">48</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8470343</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 58">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">49</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8470344</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 59">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">50</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8470345</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 60">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">51</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8470757</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 61">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">52</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8470758</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 62">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">53</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8470759</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 63">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">54</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8470760</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 64">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">55</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8490482</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row2 divide-x 65">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">56</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8497222</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 66">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">57</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8497223</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 67">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">58</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8499681</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 68">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">59</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8499682</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 69">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">60</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8499683</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 70">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">61</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8499684</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 71">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">62</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9093977</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR HEADER</span>
                </td>
            </tr>
            <tr className="row2 divide-x 72">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">63</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9096348</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 73">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">64</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9096349</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 74">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">65</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9096350</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 75">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">66</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9096351</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 76">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">67</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9096541</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 77">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">68</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9096542</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 78">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">69</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9096637</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 79">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">70</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9096638</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 80">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">71</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9315655</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row2 divide-x 81">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">72</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9315706</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 82">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">73</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9315707</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 83">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">74</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9316211</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 84">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">75</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9316212</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 85">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">76</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9318129</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>LUBE OIL COOLER HEADER</span>
                </td>
            </tr>
            <tr className="row2 divide-x 86">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">77</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9323436</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 87">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">78</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9323437</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 88">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">79</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9323438</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 89">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">80</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9323439</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 90">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">81</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9323753</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 91">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">82</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9323754</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 92">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">83</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9324392</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 93">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">84</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9324933</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 94">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">85</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9327638</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 95">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">86</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9327639</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 96">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">87</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9333553</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 97">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">88</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9333554</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 98">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">89</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9503014</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row2 divide-x 99">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">90</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9503015</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row3 divide-x 00">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">91</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9504784</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row3 divide-x 01">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">92</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9510709</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row3 divide-x 02">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">93</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9510710</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row3 divide-x 03">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">94</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9514842</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>LUBE OIL COOLER CORE</span>
                </td>
            </tr>
            <tr className="row3 divide-x 04">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">95</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9516669</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row3 divide-x 05">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">96</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9516670</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row3 divide-x 06">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">97</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9523384</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>LUBE OIL COOLER HEADER</span>
                </td>
            </tr>
            <tr className="row3 divide-x 07">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">98</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9524326</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row3 divide-x 08">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">99</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9524327</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row3 divide-x 09">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">100</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9528816</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row3 divide-x 10">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">101</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9528817</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row3 divide-x 11">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">102</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9528818</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row3 divide-x 12">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">103</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9528819</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row3 divide-x 13">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">104</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9560308</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>LUBE OIL COOLER ASM.</span>
                </td>
            </tr>
            <tr className="row3 divide-x 14">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">105</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9570733</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>GASKET</span>
                </td>
            </tr>
            <tr className="row3 divide-x 15">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">106</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9570894</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>GASKET</span>
                </td>
            </tr>
            <tr className="row3 divide-x 16">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">107</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9570895</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>GASKET</span>
                </td>
            </tr>
            <tr className="row3 divide-x 17">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">108</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9570980</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>GASKET</span>
                </td>
            </tr>
            <tr className="row3 divide-x 18">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">109</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9572322</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>GASKET</span>
                </td>
            </tr>
            <tr className="row3 divide-x 19">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">110</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9575387</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row3 divide-x 20">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">111</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9577067</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>GASKET</span>
                </td>
            </tr>
            <tr className="row3 divide-x 21">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">112</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9577068</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>GASKET</span>
                </td>
            </tr>
            <tr className="row3 divide-x 22">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">113</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9577836</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR HEADER</span>
                </td>
            </tr>
            <tr className="row3 divide-x 23">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">114</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9577837</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR HEADER</span>
                </td>
            </tr>
            <tr className="row3 divide-x 24">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">115</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9578266</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR HEADER</span>
                </td>
            </tr>
            <tr className="row3 divide-x 25">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">116</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9579164</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>GASKET</span>
                </td>
            </tr>
            <tr className="row3 divide-x 26">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">117</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9583760</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row3 divide-x 27">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">118</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9583761</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row3 divide-x 28">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">119</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9584600</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>SCREEN</span>
                </td>
            </tr>
            <tr className="row3 divide-x 29">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">120</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">10631855</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row3 divide-x 30">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">121</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">10631856</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row3 divide-x 31">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">122</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">16080919</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>AFTER COOLER ASM</span>
                </td>
            </tr>
            <tr className="row3 divide-x 32">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">123</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40008405</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row3 divide-x 33">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">124</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40017115</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row3 divide-x 34">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">125</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40020875</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>AFTER COOLER CORE</span>
                </td>
            </tr>
            <tr className="row3 divide-x 35">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">126</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40020883</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>AFTER COOLER HEADER</span>
                </td>
            </tr>
            <tr className="row3 divide-x 36">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">127</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40036276</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row3 divide-x 37">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">128</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40040016</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>GASKET</span>
                </td>
            </tr>
            <tr className="row3 divide-x 38">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">129</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40045650</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row3 divide-x 39">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">130</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40045651</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row3 divide-x 40">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">131</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40045652</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row3 divide-x 41">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">132</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40046623</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>AFTER COOLER HEADER</span>
                </td>
            </tr>
            <tr className="row3 divide-x 42">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">133</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40046695</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>GASKET</span>
                </td>
            </tr>
            <tr className="row3 divide-x 43">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">134</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40046710</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>AFTER COOLER ASM</span>
                </td>
            </tr>
            <tr className="row3 divide-x 44">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">135</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40061169</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row3 divide-x 45">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">136</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40061170</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR ASSEMBLY</span>
                </td>
            </tr>
            <tr className="row3 divide-x 46">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">137</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40113590</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>AFTER COOLER ASM</span>
                </td>
            </tr>
            <tr className="row3 divide-x 47">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">138</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">92526642</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row3 divide-x 48">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">139</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">162014000</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row3 divide-x 49">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">140</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">162015000</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row3 divide-x 50">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">141</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">162016000</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>RADIATOR CORE / SECTION</span>
                </td>
            </tr>
            <tr className="row3 divide-x 51">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">142</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">162032000</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>AFTER COOLER ASM</span>
                </td>
            </tr>
        </>
    )
}

const Emd7 = () => {
    return (
        <>
            <tr className="row1 divide-x 63">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">1</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8318770</td>
                <td className="column3 style12 s">
                    <span>Piston ring set std. consisting of five rings in one set</span>
                </td>
            </tr>
            <tr className="row1 divide-x 64">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">2</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8319739</td>
                <td className="column3 style12 s">
                    <span>Piston ring set std. consisting of five rings in one set</span>
                </td>
            </tr>
            <tr className="row1 divide-x 65">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">3</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">40033365</td>
                <td className="column3 style12 s">
                    <span>Piston ring set std. consisting of six rings in one set</span>
                </td>
            </tr>
            <tr className="row1 divide-x 66">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">4</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">9323296</td>
                <td className="column3 style12 s">
                    <span>Piston ring set std. consisting of six rings in one set</span>
                </td>
            </tr>
            <tr className="row1 divide-x 67">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">5</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">40026492</td>
                <td className="column3 style12 s">
                    <span>Piston ring set std. consisting of six rings in one set</span>
                </td>
            </tr>
            <tr className="row1 divide-x 68">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">6</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">9516928</td>
                <td className="column3 style12 s">
                    <span>Piston ring set std. consisting of six rings in one set</span>
                </td>
            </tr>
            <tr className="row1 divide-x 69">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">7</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8474214</td>
                <td className="column3 style12 s">
                    <span>Piston ring set std. consisting of six rings in one set</span>
                </td>
            </tr>
            <tr className="row1 divide-x 70">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">40026487</td>
                <td className="column3 style12 s">
                    <span>Piston ring set std. consisting of five rings in one set</span>
                </td>
            </tr>
            <tr className="row1 divide-x 71">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8467254</td>
                <td className="column3 style12 s">
                    <span>0.060 O.S. diameter consisting of six ring in one set</span>
                </td>
            </tr>
            <tr className="row1 divide-x 72">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">10</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8474216</td>
                <td className="column3 style12 s">
                    <span>0.030 O.S. diameter consisting of six ring in one set</span>
                </td>
            </tr>
            <tr className="row1 divide-x 73">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">11</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8318997</td>
                <td className="column3 style12 s">
                    <span>0.030 O.S. diameter consisting of five ring in one set</span>
                </td>
            </tr>
            <tr className="row1 divide-x 74">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">12</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8318998</td>
                <td className="column3 style12 s">
                    <span>0.060 O.S. diameter consisting of five ring in one set</span>
                </td>
            </tr>
            <tr className="row1 divide-x 75">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">13</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8356028</td>
                <td className="column3 style12 s">
                    <span>0.030 O.S. diameter consisting of six ring in one set</span>
                </td>
            </tr>
            <tr className="row1 divide-x 76">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">14</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8356029</td>
                <td className="column3 style12 s">
                    <span>0.060 O.S. diameter consisting of six ring in one set</span>
                </td>
            </tr>
            <tr className="row1 divide-x 77">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">15</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8455541</td>
                <td className="column3 style12 s">
                    <span>0.030 O.S. diameter consisting of five ring in one set</span>
                </td>
            </tr>
            <tr className="row1 divide-x 78">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">16</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8317533</td>
                <td className="column3 style12 s">
                    <span>Comp. chrome faced std size</span>
                </td>
            </tr>
            <tr className="row1 divide-x 79">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">17</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8235299</td>
                <td className="column3 style12 s">
                    <span>Comp. chrome faced std. size</span>
                </td>
            </tr>
            <tr className="row1 divide-x 80">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">18</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8257707</td>
                <td className="column3 style12 s">
                    <span>Comp. tapered faced ferrox filled std. size</span>
                </td>
            </tr>
            <tr className="row1 divide-x 81">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">19</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8028545</td>
                <td className="column3 style12 s">
                    <span>Oil control-double hook scraper std. size</span>
                </td>
            </tr>
            <tr className="row1 divide-x 82">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">20</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8257949</td>
                <td className="column3 style12 s">
                    <span>Oil control spring loaded std. size</span>
                </td>
            </tr>
            <tr className="row1 divide-x 83">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">21</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">9338809</td>
                <td className="column3 style12 s">
                    <span>Piston ring comp. five groove std. size</span>
                </td>
            </tr>
            <tr className="row1 divide-x 84">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">22</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">40021965</td>
                <td className="column3 style12 s">
                    <span>Piston ring comp. seven groove std. size</span>
                </td>
            </tr>
            <tr className="row1 divide-x 85">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">23</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8347100</td>
                <td className="column3 style12 s">
                    <span>Piston ring comp. tapered face ferrox filled three groove std</span>
                </td>
            </tr>
            <tr className="row1 divide-x 86">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">24</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8347103</td>
                <td className="column3 style12 s">
                    <span>Oil control double hook scraper std. size</span>
                </td>
            </tr>
            <tr className="row1 divide-x 87">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">25</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">40032525</td>
                <td className="column3 style12 s">
                    <span>Oil control spring loaded std. size</span>
                </td>
            </tr>
            <tr className="row1 divide-x 88">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">26</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">9323293</td>
                <td className="column3 style12 s">
                    <span>Compression-barrel faced std. size</span>
                </td>
            </tr>
            <tr className="row1 divide-x 89">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">27</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8388418</td>
                <td className="column3 style12 s">
                    <span>Compression-ferrox filled std. size</span>
                </td>
            </tr>
            <tr className="row1 divide-x 90">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">28</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8464953</td>
                <td className="column3 style12 s">
                    <span>Oil control-spring loaded std. size</span>
                </td>
            </tr>
            <tr className="row1 divide-x 91">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">29</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">9338808</td>
                <td className="column3 style12 s">
                    <span>piston ring comp. five groove std. size</span>
                </td>
            </tr>
            <tr className="row1 divide-x 92">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">30</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">40021964</td>
                <td className="column3 style12 s">
                    <span>piston ring comp. seven groove std. size</span>
                </td>
            </tr>
            <tr className="row1 divide-x 93">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">31</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8418589</td>
                <td className="column3 style12 s">
                    <span>Ring comp. chrome faced ductile iron std. size</span>
                </td>
            </tr>
            <tr className="row1 divide-x 94">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">32</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8470090</td>
                <td className="column3 style12 s">
                    <span>Ring comp. chrome faced stainless steel std. size</span>
                </td>
            </tr>
            <tr className="row1 divide-x 95">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">33</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8317536</td>
                <td className="column3 style12 s">
                    <span>Ring comp. chrome faced ductile iron std. dia. 1/64 OS width</span>
                </td>
            </tr>
            <tr className="row1 divide-x 96">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">34</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8317537</td>
                <td className="column3 style12 s">
                    <span>Ring comp. chrome faced 0.030 OS. dia. &amp; 1/64 OS width</span>
                </td>
            </tr>
            <tr className="row1 divide-x 97">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">35</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">83717538</td>
                <td className="column3 style12 s">
                    <span>Ring comp. chrome faced 0.060 OS. dia. &amp; 1/64 OS width</span>
                </td>
            </tr>
            <tr className="row1 divide-x 98">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">36</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">83717539</td>
                <td className="column3 style12 s">
                    <span>Ring comp. chrome faced std. dia. 1/32 OS width</span>
                </td>
            </tr>
            <tr className="row1 divide-x 99">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">37</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">83717540</td>
                <td className="column3 style12 s">
                    <span>Ring comp. chrome faced 0.030 OS dia. 1/32 OS width</span>
                </td>
            </tr>
            <tr className="row2 divide-x 00">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">38</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">83717541</td>
                <td className="column3 style12 s">
                    <span>Ring comp. chrome faced 0.060 OS dia. 1/32 OS width</span>
                </td>
            </tr>
            <tr className="row2 divide-x 01">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">39</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8311754</td>
                <td className="column3 style12 s">
                    <span>Ring comp. chrome faced std. dia. 1/64 OS width</span>
                </td>
            </tr>
            <tr className="row2 divide-x 02">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8311755</td>
                <td className="column3 style12 s">
                    <span>Ring comp. chrome faced 0.030 OS dia. 1/64 OS width</span>
                </td>
            </tr>
            <tr className="row2 divide-x 03">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">41</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8311756</td>
                <td className="column3 style12 s">
                    <span>Ring comp. chrome faced 0.060 OS dia. 1/64 OS width</span>
                </td>
            </tr>
            <tr className="row2 divide-x 04">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">42</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8311757</td>
                <td className="column3 style12 s">
                    <span>Ring comp. chrome faced std. dia. 1/32 OS width</span>
                </td>
            </tr>
            <tr className="row2 divide-x 05">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">43</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8311758</td>
                <td className="column3 style12 s">
                    <span>Ring comp. chrome faced 0.030 OS dia. 1/32 OS width</span>
                </td>
            </tr>
            <tr className="row2 divide-x 06">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">44</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8311759</td>
                <td className="column3 style12 s">
                    <span>Ring comp. chrome faced 0.060 OS dia. 1/32 OS width</span>
                </td>
            </tr>
            <tr className="row2 divide-x 07">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">45</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8455533</td>
                <td className="column3 style12 s">
                    <span>Ring comp. barrel face ductile iron std. dia. 1/64 OS width</span>
                </td>
            </tr>
            <tr className="row2 divide-x 08">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">46</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style11 n">8455534</td>
                <td className="column3 style12 s">
                    <span>Ring comp. barrel face ductile iron std. dia. 1/32 OS width</span>
                </td>
            </tr>
        </>
    )
}

const Emd6 = () => {
    return (
        <>
            <tr className="row1 divide-x 29">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">1</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9316231</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Exhaust Chamber</span>
                </td>
            </tr>
            <tr className="row1 divide-x 30">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">2</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9316232</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Exhaust Chamber</span>
                </td>
            </tr>
            <tr className="row1 divide-x 31">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">3</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9316233</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Exhaust Chamber</span>
                </td>
            </tr>
            <tr className="row1 divide-x 32">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">4</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">10624476</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Exhaust Chamber</span>
                </td>
            </tr>
            <tr className="row1 divide-x 33">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">5</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9557143</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Adapter &amp; Screen Assly</span>
                </td>
            </tr>
            <tr className="row1 divide-x 34">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">6</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8408987</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Expansion Joint Assly</span>
                </td>
            </tr>
            <tr className="row1 divide-x 35">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">7</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8408985</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Expansion Joint Assly</span>
                </td>
            </tr>
            <tr className="row1 divide-x 36">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8476411</td>
                <td className="column3 style10 s">
                    <span>½'' </span>
                    <span>Coupling Flex</span>
                </td>
            </tr>
            <tr className="row1 divide-x 37">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8479674</td>
                <td className="column3 style10 s">
                    <span>¾'' </span>
                    <span>Coupling Flex</span>
                </td>
            </tr>
            <tr className="row1 divide-x 38">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">10</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8470605</td>
                <td className="column3 style10 s">
                    <span>¾'' </span>
                    <span>Coupling Flex</span>
                </td>
            </tr>
            <tr className="row1 divide-x 39">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">11</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8470340</td>
                <td className="column3 style10 s">
                    <span>1'' </span>
                    <span>Coupling Flex</span>
                </td>
            </tr>
            <tr className="row1 divide-x 40">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">12</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9516671</td>
                <td className="column3 style10 s">
                    <span>2 ½'' </span>
                    <span>Coupling Flex</span>
                </td>
            </tr>
            <tr className="row1 divide-x 41">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">13</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8471160</td>
                <td className="column3 style10 s">
                    <span>3'' </span>
                    <span>Coupling Flex</span>
                </td>
            </tr>
            <tr className="row1 divide-x 42">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">14</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8468179</td>
                <td className="column3 style10 s">
                    <span>3'' </span>
                    <span>Coupling Flex</span>
                </td>
            </tr>
            <tr className="row1 divide-x 43">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">15</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8252895</td>
                <td className="column3 style10 s">
                    <span>4'' </span>
                    <span>Coupling Flex</span>
                </td>
            </tr>
            <tr className="row1 divide-x 44">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">16</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8479542</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gasket for ½'' coupling</span>
                </td>
            </tr>
            <tr className="row1 divide-x 45">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">17</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8479543</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gasket for ¾'' coupling</span>
                </td>
            </tr>
            <tr className="row1 divide-x 46">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">18</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8479544</td>
                <td className="column3 style10 s">
                    <span>Gasket for 1</span>
                    <span>'' coupling</span>
                </td>
            </tr>
            <tr className="row1 divide-x 47">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">19</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8479601</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gasket for 2 ½'' coupling</span>
                </td>
            </tr>
            <tr className="row1 divide-x 48">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">20</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8479602</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gasket for 3'' coupling</span>
                </td>
            </tr>
            <tr className="row1 divide-x 49">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">21</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8479604</td>
                <td className="column3 style10 s">
                    <span>Gasket for 4</span>
                    <span>'' coupling</span>
                </td>
            </tr>
            <tr className="row1 divide-x 50">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">22</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8455470</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>90 Degree Elbow</span>
                </td>
            </tr>
            <tr className="row1 divide-x 51">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">23</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9529830</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Exhaust Duct Assembly</span>
                </td>
            </tr>
            <tr className="row1 divide-x 52">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">24</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9546655</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Air Duct Assly (RB)</span>
                </td>
            </tr>
            <tr className="row1 divide-x 53">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">25</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9546222</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Air Duct Assly (LB)</span>
                </td>
            </tr>
            <tr className="row1 divide-x 54">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">26</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40055467</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Spacer Bolt Assly</span>
                </td>
            </tr>
            <tr className="row1 divide-x 55">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">27</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9571663</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gasket</span>
                </td>
            </tr>
            <tr className="row1 divide-x 56">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">28</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40026936</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gasket</span>
                </td>
            </tr>
            <tr className="row1 divide-x 57">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">29</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40026937</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gasket</span>
                </td>
            </tr>
            <tr className="row1 divide-x 58">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">30</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40026938</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gasket</span>
                </td>
            </tr>
            <tr className="row1 divide-x 59">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">31</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40026939</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gasket</span>
                </td>
            </tr>
            <tr className="row1 divide-x 60">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">32</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40055466</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Sq. Gasket</span>
                </td>
            </tr>
            <tr className="row1 divide-x 61">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">33</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40113590</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Modified After Cooler</span>
                </td>
            </tr>
        </>
    )
}

const Emd5 = () => {
    return (
        <>
            <tr className="row1 divide-x 10">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">1</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8415993</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Liner Cast Iron 645</span>
                </td>
            </tr>
            <tr className="row1 divide-x 11">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">2</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9318833</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Liner HUB 645</span>
                </td>
            </tr>
            <tr className="row1 divide-x 12">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">3</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9090233</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Liner Chrome 645</span>
                </td>
            </tr>
            <tr className="row1 divide-x 13">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">4</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>9546509 - 40014531</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Liner HUB 710</span>
                </td>
            </tr>
            <tr className="row1 divide-x 14">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">5</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40060841</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Fork Rod</span>
                </td>
            </tr>
            <tr className="row1 divide-x 15">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">6</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9544257</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Blade Rod</span>
                </td>
            </tr>
            <tr className="row1 divide-x 16">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">7</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8367800</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Carrier 645</span>
                </td>
            </tr>
            <tr className="row1 divide-x 17">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40006129</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Piston Tin Plated HURG Roots</span>
                </td>
            </tr>
            <tr className="row1 divide-x 18">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40006130</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Piston Tin Plated HURG 645E3</span>
                </td>
            </tr>
            <tr className="row1 divide-x 19">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">10</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40006131</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Piston Tin PlatedHURG 645E3B</span>
                </td>
            </tr>
            <tr className="row1 divide-x 20">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">11</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40033365</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Ring Set CI Liner 645</span>
                </td>
            </tr>
            <tr className="row1 divide-x 21">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">12</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9323296</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Ring Set Chrome 645</span>
                </td>
            </tr>
            <tr className="row1 divide-x 22">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">13</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8269842</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Piston Pin 645E</span>
                </td>
            </tr>
            <tr className="row1 divide-x 23">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">14</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">40078951</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Piston Pin 645E3B</span>
                </td>
            </tr>
            <tr className="row1 divide-x 24">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">15</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8268641</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Lower Liner Insert 645</span>
                </td>
            </tr>
            <tr className="row1 divide-x 25">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">16</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9316139</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Lower Liner Insert Hi HP</span>
                </td>
            </tr>
            <tr className="row1 divide-x 26">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">17</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9583686</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Gasket Install Kit Power Assy</span>
                </td>
            </tr>
            <tr className="row1 divide-x 27">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">18</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9581924</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Cyl. Head Seat Ring Viton</span>
                </td>
            </tr>
        </>
    )
}

const Emd4 = () => {
    return (
        <>
            <tr className="row1 divide-x 02">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">1</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8483944</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Drive Gear 58T</span>
                </td>
            </tr>
            <tr className="row1 divide-x 03">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">2</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8069019</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Drive Gear 79T</span>
                </td>
            </tr>
            <tr className="row1 divide-x 04">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">3</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8483945</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Drive Gear 58T</span>
                </td>
            </tr>
            <tr className="row1 divide-x 05">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">4</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8069014</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Drive Gear 79T</span>
                </td>
            </tr>
            <tr className="row1 divide-x 06">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">5</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8360843</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Drive Gear 79T</span>
                </td>
            </tr>
            <tr className="row1 divide-x 07">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">6</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8416930</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Drive Gear 265T</span>
                </td>
            </tr>
            <tr className="row1 divide-x 08">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">7</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>8360839 / 8141909</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Drive Gear 113T</span>
                </td>
            </tr>
        </>
    )
}

const Emd3 = () => {
    return (
        <>
            <tr className="row8 divide-x 9">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">1</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>9543014-S</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Crankcase/Engine Block 710-16 Cylinder</span>
                </td>
            </tr>
            <tr className="row9 divide-x 0">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">2</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>40039643-S</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Camshaft Section 710-16 Cylinder</span>
                </td>
            </tr>
            <tr className="row9 divide-x 1">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">3</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>40061469-S</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Oil Pan 710 -16 Cylinder</span>
                </td>
            </tr>
            <tr className="row9 divide-x 2">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">4</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>9544069-S</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Cam Housing 710 -16 Cylinder</span>
                </td>
            </tr>
            <tr className="row9 divide-x 3">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">5</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>9544985-S</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Frame and cover Assembly -16 Cylinder</span>
                </td>
            </tr>
            <tr className="row9 divide-x 4">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">6</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>9546222-S</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Air duct LB 710 -16 Cylinder</span>
                </td>
            </tr>
            <tr className="row9 divide-x 5">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">7</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>9546555-S</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Air duct RB 710 -16 Cylinder</span>
                </td>
            </tr>
            <tr className="row9 divide-x 6">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style9 null" />
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Oil Pan 645 -16 Cylinder</span>
                </td>
            </tr>
            <tr className="row9 divide-x 7">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>8366877-S</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Cam Housing 710 -16 Cylinder</span>
                </td>
            </tr>
            <tr className="row9 divide-x 8">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">10</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 style9 null" />
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Frame and cover Assembly 645 -16 Cylinder</span>
                </td>
            </tr>
            <tr className="row9 divide-x 9">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">11</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>9531624-S</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Air duct LB 645 -16 Cylinder</span>
                </td>
            </tr>
            <tr className="row1 divide-x 00">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">12</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>9531625-S</span>
                </td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Air duct RB 645 -16 Cylinder</span>
                </td>
            </tr>
        </>
    )
}

const Emd2 = () => {
    return (
        <>
            <tr className="row6 divide-x 3">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">1</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8028006</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Thrust Bearing Collar</span>
                </td>
            </tr>
            <tr className="row6 divide-x 4">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">2</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8028419</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Thrust Bearing Collar</span>
                </td>
            </tr>
            <tr className="row6 divide-x 5">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">3</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8029461</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bushing</span>
                </td>
            </tr>
            <tr className="row6 divide-x 6">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">4</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8029491</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Oil Pump Bushing</span>
                </td>
            </tr>
            <tr className="row6 divide-x 7">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">5</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8068624</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Floating Bushing</span>
                </td>
            </tr>
            <tr className="row6 divide-x 8">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">6</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8071176</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Cam Bearing</span>
                </td>
            </tr>
            <tr className="row6 divide-x 9">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">7</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8136114</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Con Rod Bearing Lower</span>
                </td>
            </tr>
            <tr className="row7 divide-x 0">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8237900</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bearing Front Bracket</span>
                </td>
            </tr>
            <tr className="row7 divide-x 1">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8253825</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Bearing Rear Bracket</span>
                </td>
            </tr>
            <tr className="row7 divide-x 2">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">10</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8341192</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Insert Roots Blown</span>
                </td>
            </tr>
            <tr className="row7 divide-x 3">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">11</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8354118</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Con Rod Bearing Upper</span>
                </td>
            </tr>
            <tr className="row7 divide-x 4">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">12</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8361565</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Insert Carrier</span>
                </td>
            </tr>
            <tr className="row7 divide-x 5">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">13</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8452186</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>16 Cyl. Upper Main Kit</span>
                </td>
            </tr>
            <tr className="row7 divide-x 6">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">14</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8452210</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>16 Cyl. Lower Main Kit</span>
                </td>
            </tr>
            <tr className="row7 divide-x 7">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">15</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8455081</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>12 Cyl. Upper Main Kit</span>
                </td>
            </tr>
            <tr className="row7 divide-x 8">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">16</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8455083</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>12 Cyl. Lower Main Kit</span>
                </td>
            </tr>
            <tr className="row7 divide-x 9">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">17</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8455665</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Rear Lower Main</span>
                </td>
            </tr>
            <tr className="row8 divide-x 0">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">18</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8455666</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Front &amp; Int. Lower Main</span>
                </td>
            </tr>
            <tr className="row8 divide-x 1">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">19</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8455667</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Center Lower Main</span>
                </td>
            </tr>
            <tr className="row8 divide-x 2">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">20</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8455668</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Center Lower Main</span>
                </td>
            </tr>
            <tr className="row8 divide-x 3">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">21</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8455844</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Rear Upper Main</span>
                </td>
            </tr>
            <tr className="row8 divide-x 4">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">22</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8455850</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Center Upper Main</span>
                </td>
            </tr>
            <tr className="row8 divide-x 5">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">23</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8455856</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Center Upper Main</span>
                </td>
            </tr>
            <tr className="row8 divide-x 6">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">24</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">8455862</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Front &amp; Int. Upper Main</span>
                </td>
            </tr>
            <tr className="row8 divide-x 7">
                <td className="column0 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">25</td>
                <td className="column1 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>EMD</span>
                </td>
                <td className="column2 n md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">9571921</td>
                <td className="column3 s md:whitespace-nowrap md:px-6 px-2 md:py-4 py-2">
                    <span>Rocker Arm Bushing</span>
                </td>
            </tr>
        </>
    )
}

const Emd2_1 = () => {
    return (
        <table className="w-full table-auto border">
            <thead className="border">
                <tr className="row1   divide-x divide-y font-bold">
                    <td className="column0 style4 s style5 md:py-4 py-2 md:px-6 px-2" rowSpan={2}>
                        <span>SL.No.</span>
                    </td>
                    <td className="column1 style7 s style8 md:py-4 py-2 md:px-6 px-2" rowSpan={2}>
                        <span>OEM</span>
                    </td>
                    <td className="column2 style9 s style10 md:py-4 py-2 md:px-6 px-2" rowSpan={2}>
                        <span>Description</span>
                    </td>
                    <td className="column3 style11 s style12" colSpan={2}>
                        <tr className="" >
                            <td className="py-2 px-auto md:px-6 px-2">
                            OEM REF. #
                            </td>
                        </tr>
                        <tr className="row2 divide-x  grid grid-cols-2 border-t ">
                            <td className="column3 py-2 md:px-6 px-2 style6 s">
                                <span>LB</span>
                            </td>
                            <td className="column4 py-2 md:px-6 px-2 style6 s">
                                <span>RB</span>
                            </td>
                        </tr>
                    </td>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700 ">
                <tr className="row3 font-medium">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">1</td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 style15 s style17" colSpan={3}>
                        <span>EMD 16-710G3C -16 Cylinder</span>
                    </td>
                </tr>
                <tr className="row4 divide-x ">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>a)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Camshaft ASM</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">40054372</td>
                    <td className="column4 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">40054373</td>
                </tr>
                <tr className="row5 divide-x ">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>b)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Camshaft Segment</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">40039643</td>
                    <td className="column4 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">40039643</td>
                </tr>
                <tr className="row6 divide-x ">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>c)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Camshaft Segment</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>40039643-1033</span>
                    </td>
                    <td className="column4 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>40039643-1033</span>
                    </td>
                </tr>
                <tr className="row7 divide-x ">
                    <td className="column0 style18 null md:py-4 py-2" colSpan={5} />
                </tr>
                <tr className="row8 font-medium">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">2</td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 style15 s style17" colSpan={3}>
                        <span>EMD 16-645 Engines-16 Cylinder</span>
                    </td>
                </tr>
                <tr className="row9 divide-x ">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>a)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Camshaft ASM</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>8419910/8274790</span>
                    </td>
                    <td className="column4 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>8419911/8274791</span>
                    </td>
                </tr>
                <tr className="row1 divide-x 0">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>b)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Camshaft Segment</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">8419849</td>
                    <td className="column4 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">8419849</td>
                </tr>
                <tr className="row1 divide-x 1">
                    <td className="column0 style18 null md:py-4 py-2" colSpan={5} />
                </tr>
                <tr className="row1 font-medium 2">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">3</td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 style15 s style17" colSpan={3}>
                        <span>EMD 8 -645 Engines -8 Cylinder</span>
                    </td>
                </tr>
                <tr className="row1 divide-x 3">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>a)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Camshaft Asm</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">8491992</td>
                    <td className="column4 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">8491993</td>
                </tr>
                <tr className="row1 divide-x 4">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>b)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Camshaft Segment</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">8419849</td>
                    <td className="column4 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">8419849</td>
                </tr>
                <tr className="row1 divide-x 5">
                    <td className="column0 style18 null md:py-4 py-2" colSpan={5} />
                </tr>
                <tr className="row1 font-medium 6">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">4</td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 style15 s style17" colSpan={3}>
                        <span>Spacer and Stub Shaft</span>
                    </td>
                </tr>
                <tr className="row1 divide-x 7">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>a)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Spacer</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">8028637</td>
                    <td className="column4 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">8028638</td>
                </tr>
                <tr className="row1 divide-x 8">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>b)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Stub Shaft</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">8070749</td>
                    <td className="column4 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">8070749</td>
                </tr>
                <tr className="row1 divide-x 9">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>c)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Stub Shaft</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">8028361</td>
                    <td className="column4 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">8028361</td>
                </tr>
                <tr className="row2 divide-x 0">
                    <td className="column0 style18 null md:py-4 py-2" colSpan={5} />
                </tr>
                <tr className="row2 font-medium 1">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">5</td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 style15 s style17" colSpan={3}>
                        <span>Camshaft Assembly Accessories</span>
                    </td>
                </tr>
                <tr className="row2 divide-x 2">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>a)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Stud 3/8</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n style22" colSpan={2}>
                        8034672
                    </td>
                </tr>
                <tr className="row2 divide-x 3">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>b)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Stud 3/8</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n style22" colSpan={2}>
                        8034673
                    </td>
                </tr>
                <tr className="row2 divide-x 4">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>c)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Nut-3/8 -24 SLFLKG</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n style22" colSpan={2}>
                        8032717
                    </td>
                </tr>
                <tr className="row2 divide-x 5">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>d)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Washer-Special</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n style22" colSpan={2}>
                        8035950
                    </td>
                </tr>
                <tr className="row2 divide-x 6">
                    <td className="column0 style18 null md:py-4 py-2" colSpan={5} />
                </tr>
                <tr className="row2 font-medium 7">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">6</td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 style15 s style17" colSpan={3}>
                        <span>EMD 16 -710G3C -16 Cylinder</span>
                    </td>
                </tr>
                <tr className="row2 divide-x 8">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>a)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Pin-Piston</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n style22" colSpan={2}>
                        40078951
                    </td>
                </tr>
                <tr className="row2 divide-x 9">
                    <td className="column0 style18 null md:py-4 py-2" colSpan={5} />
                </tr>
                <tr className="row3 font-medium 0">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">7</td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 style15 s style17" colSpan={3}>
                        <span>EMD 16-710G3C -16 Cylinder</span>
                    </td>
                </tr>
                <tr className="row3 divide-x 1">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>a)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Plate ASM</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n style22" colSpan={2}>
                        9534854
                    </td>
                </tr>
                <tr className="row3 divide-x 2">
                    <td className="column0 style18 null md:py-4 py-2" colSpan={5} />
                </tr>
                <tr className="row3 font-medium 3">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n">8</td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 style15 s style17" colSpan={3}>
                        <span>EMD 16-645-16 Cylinder</span>
                    </td>
                </tr>
                <tr className="row3 divide-x 4">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>a)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Rocker Arm Injector ASM</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n style22" colSpan={2}>
                        9319504
                    </td>
                </tr>
                <tr className="row3 divide-x 5">
                    <td className="column0 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>b)</span>
                    </td>
                    <td className="column1 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>EMD</span>
                    </td>
                    <td className="column2 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap s">
                        <span>Rocker Arm Exhaust ASM</span>
                    </td>
                    <td className="column3 md:px-6 px-2 md:py-4 py-2 md:whitespace-nowrap n style22" colSpan={2}>
                        9319505
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
