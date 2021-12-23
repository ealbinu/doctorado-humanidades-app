const schemas = [
		{
			"estudianteNombre": {
				"type": "text",
				"position": {
					"x": 16.03,
					"y": 60
				},
				"width": 174.08,
				"height": 7.45,
				"alignment": "left",
				"fontSize": 14,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"estudianteGrado": {
				"type": "text",
				"position": {
					"x": 150.55,
					"y": 55
				},
				"width": 40.03,
				"height": 7,
				"alignment": "left",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"asesorNombre": {
				"type": "text",
				"position": {
					"x": 16.14,
					"y": 71.5
				},
				"width": 173.91,
				"height": 7.45,
				"alignment": "left",
				"fontSize": 14,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"estudianteTitulo": {
				"type": "text",
				"position": {
					"x": 15.82,
					"y": 82.8
				},
				"width": 173.91,
				"height": 9.91,
				"alignment": "left",
				"fontSize": 14,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"periodoInicio": {
				"type": "text",
				"position": {
					"x": 102,
					"y": 95.7
				},
				"width": 40.56,
				"height": 7,
				"alignment": "left",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"periodoFinal": {
				"type": "text",
				"position": {
					"x": 148.96,
					"y": 95.7
				},
				"width": 35,
				"height": 7,
				"alignment": "left",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"desempenoE": {
				"type": "text",
				"position": {
					"x": 85.2,
					"y": 130.5
				},
				"width": 14.1,
				"height": 7,
				"alignment": "center",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"desempenoB": {
				"type": "text",
				"position": {
					"x": 110.34,
					"y": 130.5
				},
				"width": 19.39,
				"height": 7,
				"alignment": "center",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"desempenoS": {
				"type": "text",
				"position": {
					"x": 138.9,
					"y": 130.5
				},
				"width": 14.63,
				"height": 7,
				"alignment": "center",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"desempenoN": {
				"type": "text",
				"position": {
					"x": 166.95,
					"y": 130.5
				},
				"width": 22.29,
				"height": 6.99,
				"alignment": "center",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"cumplimientoE": {
				"type": "text",
				"position": {
					"x": 85.72,
					"y": 143.5
				},
				"width": 13.83,
				"height": 7,
				"alignment": "center",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"cumplimientoB": {
				"type": "text",
				"position": {
					"x": 110.33,
					"y": 143.5
				},
				"width": 19.12,
				"height": 7,
				"alignment": "center",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"cumplimientoS": {
				"type": "text",
				"position": {
					"x": 138.38,
					"y": 143.5
				},
				"width": 15.68,
				"height": 7,
				"alignment": "center",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"cumplimientoN": {
				"type": "text",
				"position": {
					"x": 166.95,
					"y": 143.5
				},
				"width": 22.03,
				"height": 7,
				"alignment": "center",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"obtencionE": {
				"type": "text",
				"position": {
					"x": 85.72,
					"y": 156.5
				},
				"width": 13.3,
				"height": 7,
				"alignment": "center",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"obtencionB": {
				"type": "text",
				"position": {
					"x": 111.12,
					"y": 156.5
				},
				"width": 18.33,
				"height": 7,
				"alignment": "center",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"obtencionS": {
				"type": "text",
				"position": {
					"x": 139.17,
					"y": 156.5
				},
				"width": 15.16,
				"height": 7,
				"alignment": "center",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"obtencionN": {
				"type": "text",
				"position": {
					"x": 168.02,
					"y": 156.5
				},
				"width": 20.44,
				"height": 6.99,
				"alignment": "center",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"comentarios": {
				"type": "text",
				"position": {
					"x": 15.61,
					"y": 176
				},
				"width": 180.52,
				"height": 9.91,
				"alignment": "left",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"porcentaje": {
				"type": "text",
				"position": {
					"x": 119,
					"y": 186
				},
				"width": 35,
				"height": 7,
				"alignment": "left",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"recomienda": {
				"type": "text",
				"position": {
					"x": 16.4,
					"y": 209
				},
				"width": 180.51,
				"height": 6.99,
				"alignment": "left",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"nombreAsesorFirma": {
				"type": "text",
				"position": {
					"x": 13.76,
					"y": 258
				},
				"width": 87.12,
				"height": 6.99,
				"alignment": "center",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"nombreCoordinadorFirma": {
				"type": "text",
				"position": {
					"x": 110.07,
					"y": 258
				},
				"width": 86.33,
				"height": 6.98,
				"alignment": "center",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			},
			"asesorFirma": {
				"type": "image",
				"position": {
					"x": 20,
					"y": 213.8
				},
				"width": 72,
				"height": 40.4
			},
			"coordinadorFirma": {
				"type": "image",
				"position": {
					"x": 116,
					"y": 213.8
				},
				"width": 72,
				"height": 40.4
			},
			"fechaEvaluacion": {
				"type": "text",
				"position": {
					"x": 50.54,
					"y": 276.8
				},
				"width": 56.96,
				"height": 7,
				"alignment": "left",
				"fontSize": 12,
				"characterSpacing": 0,
				"lineHeight": 1
			}
		}
	]

export default { schemas }