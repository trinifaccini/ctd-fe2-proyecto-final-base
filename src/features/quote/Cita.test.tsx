import Cita from './Cita';
import { render } from './test-utils';
import { screen } from '@testing-library/react';
import { server } from '../../mocks/server';
import userEvent from '@testing-library/user-event';

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

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
        // NO USA EL HANDLER PORQUE CUANDO SE INGRESA UN NUMERO NO LLEGA A HACER EL FETCH A LA API, SE DEVUELVE UN ERROR ANTES
        // NO MUESTRA EL CARGANDO... POR LA MISMA RAZÓN
        it("Debería mostrar mensaje de error" , async() => {

            render(<Cita />);
            await userEvent.type(screen.getByRole('textbox'), '1');

            const button = screen.getByTestId('buscarCita');
            await userEvent.click(button);

            expect(await await(screen.findByText("Por favor ingrese un nombre válido"))).toBeInTheDocument();

        })
    });

    describe("Se ingresa nombre válido con cita inexistente", () => {
        it("No debería mostrar ninguna cita", async() => {

            render(<Cita />);
            await userEvent.type(screen.getByRole('textbox'), 'Lisa');

            const button = screen.getByTestId('buscarCita');
            await userEvent.click(button);

            expect(await screen.findByText("CARGANDO...")).toBeInTheDocument();
            expect(await await(screen.findByText("Por favor ingrese un nombre válido"))).toBeInTheDocument();

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

