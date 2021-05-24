import React, {useEffect, useState} from "react";
import { Pie } from 'react-chartjs-2';
import { caracStyle } from "./Caracteristic.style";
import {Form} from 'react-bootstrap'

const LABELS = ['Intelligence', 'Humour', 'Ambition', 'Détermination', 'Studieux', 'Sérieux', 'Folie'];
const RGB_BACKGROUND =  [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(4, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(25, 159, 64, 0.2)',
    'rgba(255, 1, 64, 0.2)'
  ];

const RGB_BORDER = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(4, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(25, 159, 64, 1)',
    'rgba(255, 1, 64, 1)'
];

export const Caracteristic = () => {

    const [caracIntel, setCaracIntel] = useState(50);
    const [caracHumor, setCaracHumor] = useState(50);
    const [caracAmbition, setCaracAmbition] = useState(50);
    const [caracDetermination, setCaracDetermination] = useState(50);
    const [caracStud, setCaracStud] = useState(50);
    const [caracSerious, setCaracSerious] = useState(50);
    const [caracInsanity, setCaracInsanity] = useState(50);

    useEffect(() => {
        return () => {
            // cleanup
        }
    }, [])

    const rangeOnChange = ev => {
        let {value, id} = ev.target;

        switch (id) {
            case LABELS[0]:
                setCaracIntel(value);
            break;
            case LABELS[1]:
                setCaracHumor(value);
            break;
            case LABELS[2]:
                setCaracAmbition(value);
            break;
            case LABELS[3]:
                setCaracDetermination(value);
            break;
            case LABELS[4]:
                setCaracStud(value);
            break;
            case LABELS[5]:
                setCaracSerious(value);
            break;
            case LABELS[6]:
                setCaracInsanity(value);
            break;
            default:
                // do nothing wrong key given
        }

    }

    let data = {
        labels: LABELS,
        datasets: [
          {
            label: 'Caractéristiques',
            data: [
                caracIntel,
                caracHumor,
                caracAmbition,
                caracDetermination, 
                caracStud, 
                caracSerious,
                caracInsanity],
            backgroundColor: RGB_BACKGROUND,
            borderColor: RGB_BORDER,
            borderWidth: 1,
          },
        ],
      };

    return (
            <>
            <div className="d-flex mt-4">
                <Form style={caracStyle.inputsFlexContainer}>
                    {
                        LABELS.map( caracteristique => { return <div>
                            <Form.Group key={caracteristique + "-grp"}>
                                <Form.Label key={caracteristique + "-label"}>{caracteristique}</Form.Label>
                                <Form.Control key={caracteristique + "-input"} type="range" onChange={rangeOnChange} id={caracteristique}/>
                            </Form.Group>
                        </div>
                        })
                    }
                </Form>
                <div style={caracStyle.pieChart} className="d-flex justify-content-center">
                    <Pie data={data} />
                </div>
            </div>
            </>
    )
}