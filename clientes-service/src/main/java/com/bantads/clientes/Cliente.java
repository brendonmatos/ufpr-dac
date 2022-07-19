package com.bantads.clientes;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "cliente")
public class Cliente {
    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "nome")
    @NotNull
    private String nome;

    @Column(name = "salario")
    @NotNull
    private Integer salario;

}
