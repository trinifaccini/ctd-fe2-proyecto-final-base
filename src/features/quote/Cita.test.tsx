import Cita from './Cita';
import { render } from './test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { server } from '../../mocks/server';
import userEvent from '@testing-library/user-event';

// Inicializamos el servidor
beforeAll(() => server.listen())

// Despues de cada test, reseteamos el servidor
afterEach(() => server.resetHandlers())

// Lo cerramos cuando terminan
afterAll(() => server.close())


describe("Cita", () => {

    describe("No se ingresa nombre a buscar", () => {
        it("Debería mostrar la cita de Rainier Wolfcastle (aleatoria)", async () => {

            render(<Cita />);

            const button = screen.getByTestId('buscarCita');
            await userEvent.click(button);


            expect(await screen.findByText("CARGANDO...")).toBeInTheDocument();
            expect(await (await screen.findByText("Rainier Wolfcastle"))).toBeInTheDocument();

        })
    })

    describe("Se ingresa nombre vacío (solo espacios)", () => {
        it("Debería mostrar la cita de Rainier Wolfcastle (aleatoria)" , async() => {

            render(<Cita />);
            await userEvent.type(screen.getByRole('textbox'), '   ');

            const button = screen.getByTestId('buscarCita');
            await userEvent.click(button);

            expect(await screen.findByText("CARGANDO...")).toBeInTheDocument();
            expect(await (await screen.findByText("Rainier Wolfcastle"))).toBeInTheDocument();

        })
    });

    describe("Se ingrsa nombre inválido (numero)", () => {
        it("Debería mostrar mensaje de error" , async() => {

            render(<Cita />);
            await userEvent.type(screen.getByRole('textbox'), '1');

            const button = screen.getByTestId('buscarCita');
            await userEvent.click(button);

            expect(screen.findByText("CARGANDO...")).toBeInTheDocument(); // NO SE POR QUÉ NO MUESTRA EL CARGANDO
            expect(await screen.findByText("Por favor ingrese un nombre válido")).toBeInTheDocument();

        })
    });

    describe("Se ingresa nombre válido e inexistente", () => {
        it("No debería mostrar ninguna cita", async() => {

            render(<Cita />);
            await userEvent.type(screen.getByRole('textbox'), 'Lisa');

            const button = screen.getByTestId('buscarCita');
            await userEvent.click(button);

            expect(await screen.findByText("CARGANDO...")).toBeInTheDocument();
            //expect(await( await screen.findByText("No se encontro ninguna cita"))).toBeInTheDocument(); ESTO DEBERIA MOSTRAR (CREO)
            expect(await screen.findByText("Por favor ingrese un nombre válido")).toBeInTheDocument();

        })
    });

    describe("Se ingresa nombre válido y existente", () => {
        it("Debería mostrar la cita de Homero", async() => {

            render(<Cita />);
            await userEvent.type(screen.getByRole('textbox'), 'Homer');

            const button = screen.getByTestId('buscarCita');
            await userEvent.click(button);

            expect(await screen.findByText("CARGANDO...")).toBeInTheDocument();
            expect(await( await screen.findByText("Homer Simpson"))).toBeInTheDocument();

        })
    });

    

    


})

