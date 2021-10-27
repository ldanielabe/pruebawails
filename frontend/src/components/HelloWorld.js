import React, { useState } from 'react';
import Modal from 'react-modal';
import { TextInputField, Button, Table  } from 'evergreen-ui'
import { useForm } from 'react-hook-form';

// Hooks
import useUser from '../hooks/useUser';


function HelloWorld() {
	const [showModal, setShowModal] = useState(false);
	const [result, setResult] = useState(null);
	const [lista, setLista] = useState([]);

	const handleOpenModal = () => {
		setShowModal(true);
		window.backend.list().then((res) => setLista(JSON.parse(res))) 		
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const { register, handleSubmit, watch, formState: { errors } } = useForm();

	// const { onSubmitUser } = useUser;

	const onSubmit = data => {
		window.backend.basic(data.name).then((result) => setResult(result));
	}

	return (
		<div className="App">
			<button onClick={() => handleOpenModal()} type="button">
				Hello
      </button>
			<Modal
				appElement={document.getElementById("app")}
				isOpen={showModal}
				contentLabel="Minimal Modal Example"
			>
				
				
			<form onSubmit={handleSubmit(onSubmit)}>
			
			<TextInputField {...register("name", { required: true })} />
			{errors.exampleRequired && <span>This field is required</span>}
			
			<Button marginRight={16} onClick={() => handleCloseModal()}>Cancelar</Button>

				<Button marginRight={16} appearance="primary" type="submit">
					Guardar
				</Button>
			</form>

			<p>{result}</p>
			<Table>
			<Table.Head>
				<Table.SearchHeaderCell />
				<Table.TextHeaderCell>ID</Table.TextHeaderCell>
				<Table.TextHeaderCell>Name</Table.TextHeaderCell>
			</Table.Head>
			<Table.VirtualBody height={240}>
				{lista.map((user) => (
				<Table.Row key={user.id} isSelectable onSelect={() => alert(user.name)}>
					<Table.TextCell>{user.id}</Table.TextCell>
					<Table.TextCell>{user.name}</Table.TextCell>
				</Table.Row>
				))}
			</Table.VirtualBody>
			</Table>

			</Modal>
		</div>
	);
}

export default HelloWorld;
