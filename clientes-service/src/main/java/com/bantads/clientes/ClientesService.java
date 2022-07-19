package com.bantads.clientes;

import java.util.List;
import java.util.Optional;

public interface ClientesService {
    Cliente addCliente(Cliente cliente);
    List<Cliente> getAllClientes();
    Optional<Cliente> getClienteById(Integer clienteId);
}
