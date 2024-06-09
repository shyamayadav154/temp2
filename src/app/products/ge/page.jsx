import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TablWrapper } from "../emd/page"

function GE() {
    return (
        <section className="container mx-auto flex flex-col gap-7 px-4 md:px-6">
            <h2 className="mb-5 text-center text-xl font-bold tracking-tighter sm:text-3xl">GE Parts List</h2>
            <div className="mx-auto w-full max-w-[800px]">
                <AccordionGe />
            </div>
        </section>
    )
}

export default GE

function AccordionGe() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>GE Alternator Gears & Pinion</AccordionTrigger>
                <AccordionContent>
                    <TablWrapper>
                        <Ge1 />
                    </TablWrapper>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>GE Camshaft Assembly</AccordionTrigger>
                <AccordionContent>
                    <TablWrapper>
                        <Ge2 />
                    </TablWrapper>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>GE Radiator Assembly</AccordionTrigger>
                <AccordionContent>
                    <TablWrapper>
                        <Ge3 />
                    </TablWrapper>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>GE Traction Gears and Pinions</AccordionTrigger>
                <AccordionContent>
                    <TablWrapper>
                        <Ge4 />
                    </TablWrapper>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

const Ge = () => {
    return <></>
}

const Ge1 = () => {
    return (
        <>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">1</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C637055P6</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>Drive Gear 102T</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">2</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C635625P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>PINION 43 Tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">3</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C637055P6</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>Drive Gear 102T</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">4</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C635800P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>PINION 43 Tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">5</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C637055P6</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>Drive Gear 102T</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">6</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C632663P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>PINION 43 Tooth</span>
                </td>
            </tr>
        </>
    )
}

const Ge2 = () => {
    return (
        <>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">1</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>116x1114-1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>RHS-16Cylinder</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">2</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>116x1115-1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>LHS -16Cylinder</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">3</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>116x1122-1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>RHS-12 Cylinder</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">4</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>116x1123-1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>LHS-12 Cylinder</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">5</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>116x1217</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>Camshaft Section Left Side</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">6</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>116x1216</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>Camshaft Section Right Side</span>
                </td>
            </tr>
        </>
    )
}

const Ge4 = () => {
    return (
        <>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">1</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C637598P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>Gear - 90 tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">2</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C637595P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>PINION 21 Tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">3</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>8837760 / 41B530121P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>Gear - 91 tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">4</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>84C614969P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>PINION 20 Tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">5</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C632784P2 / 8837724</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>Gear - 92 tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">6</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C632785P2</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>PINION 19 Tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">7</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C636682P1 / 88377526P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>Gear - 93 tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">8</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C635677P2 / 41C637903P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>PINION 18 Tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">9</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C637211P1 / 8837727P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>Gear - 94 tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">10</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C637180P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>PINION 17 Tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">11</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C635820P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>Gear - 65 tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">12</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C635796P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>PINION 18 Tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">13</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C632494P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>Gear - 74 tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">14</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C637399P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>PINION 18 Tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">15</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C632350P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>Gear - 77 tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">16</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C632349P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>PINION 26 Tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">17</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C636806P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>Gear - 83 tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">18</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C636447P6</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>PINION 20 Tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">19</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41D735826P2</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>Gear - 87 tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">20</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41D735825P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>PINION 16 Tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">21</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C632381P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>Gear - 90 tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">22</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C632382P1</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>PINION 17 Tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">23</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41C637055P6</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>Gear - 83 tooth</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">24</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>84C62083492</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>PINION 20 Tooth</span>
                </td>
            </tr>
        </>
    )
}

const Ge3 = () => {
    return (
        <>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">1</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41D701172</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>RADIATOR ASM.</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">2</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41D701172P2</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>RADIATOR ASM.</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">3</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>41D704572</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>RADIATOR ASM.</span>
                </td>
            </tr>
            <tr className="divide-x">
                <td className="column0 px-8 py-4 whitespace-nowrap n">4</td>
                <td className="column1 px-8 py-4 whitespace-nowrap s">
                    <span>GE</span>
                </td>
                <td className="column2 px-8 py-4 whitespace-nowrap s">
                    <span>84A204698P3</span>
                </td>
                <td className="column3 px-8 py-4 whitespace-nowrap s">
                    <span>RADIATOR ASM.</span>
                </td>
            </tr>
        </>
    )
}
