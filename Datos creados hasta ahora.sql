-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 10-09-2021 a las 19:02:19
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `VECO`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agenda`
--

CREATE TABLE `agenda` (
  `id_agenda` int(11) NOT NULL,
  `nombre` varchar(70) NOT NULL,
  `fecha_inicio` datetime NOT NULL,
  `fecha_final` datetime NOT NULL,
  `disponible` tinyint(1) NOT NULL,
  `veterinario_id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `creado` bigint(20) NOT NULL,
  `actualizado` bigint(20) NOT NULL,
  `eliminado` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `agenda`
--

INSERT INTO `agenda` (`id_agenda`, `nombre`, `fecha_inicio`, `fecha_final`, `disponible`, `veterinario_id`, `usuario_id`, `creado`, `actualizado`, `eliminado`) VALUES
(1, 'Agenda Juan', '2021-08-19 16:00:00', '2021-08-19 17:00:00', 0, 4, 2, 1629571067, 1629571067, NULL),
(2, 'Mi Agenda', '2021-08-19 16:00:00', '2021-08-19 17:00:00', 0, 7, 3, 1630979425, 1630979425, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `id_cita` int(11) NOT NULL,
  `agenda_id` int(11) NOT NULL,
  `motivo` varchar(250) NOT NULL,
  `precio_cita` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `paciente_id` int(11) NOT NULL,
  `creado` bigint(20) NOT NULL,
  `actualizado` bigint(20) NOT NULL,
  `eliminado` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`id_cita`, `agenda_id`, `motivo`, `precio_cita`, `usuario_id`, `paciente_id`, `creado`, `actualizado`, `eliminado`) VALUES
(1, 1, 'Accidente', 120000, 2, 3, 1629571399, 1629571399, NULL),
(2, 1, 'Accidente', 120000, 2, 3, 1630962748, 1630962748, NULL),
(3, 1, 'Accidente', 120000, 6, 3, 1630963264, 1630963264, NULL),
(6, 1, 'Accidente', 120000, 6, 8, 1630963508, 1630963508, NULL),
(7, 1, 'Accidente', 120000, 6, 8, 1630963585, 1630963585, NULL),
(8, 1, 'Accidente', 120000, 6, 8, 1630967143, 1630967143, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historias`
--

CREATE TABLE `historias` (
  `id_historia` int(11) NOT NULL,
  `observacion` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `tipo_cita_id` int(11) NOT NULL,
  `mascota_id` int(11) NOT NULL,
  `veterinario_id` int(11) NOT NULL,
  `creado` bigint(20) NOT NULL,
  `actualizado` bigint(20) NOT NULL,
  `eliminado` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotas`
--

CREATE TABLE `mascotas` (
  `id_mascota` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `genero` varchar(1) NOT NULL,
  `edad` varchar(11) NOT NULL,
  `raza` varchar(255) NOT NULL,
  `peso` varchar(100) NOT NULL,
  `estado_salud` varchar(60) NOT NULL,
  `tipo_mascota_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `creado` bigint(20) NOT NULL,
  `actualizado` bigint(20) NOT NULL,
  `eliminado` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mascotas`
--

INSERT INTO `mascotas` (`id_mascota`, `nombre`, `genero`, `edad`, `raza`, `peso`, `estado_salud`, `tipo_mascota_id`, `usuario_id`, `creado`, `actualizado`, `eliminado`) VALUES
(3, 'Mina', 'H', '2', 'Labrador', '20', 'Saludable', 1, 2, 1629570884, 1629570884, NULL),
(4, 'Lulú', 'H', '4', 'Capuccino', '20', 'Saludable', 2, 3, 1629570926, 1629570926, NULL),
(7, 'Luna', 'H', '8 meses', 'Chihuahua', '5 kilogramo', 'Saludable', 1, 5, 1630556646, 1630556646, NULL),
(8, 'Rocky', 'M', '14 meses', 'Pitbull', '10 kilogram', 'Saludable', 1, 6, 1630963355, 1630963355, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` smallint(6) NOT NULL,
  `nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`) VALUES
(1, 'Admin'),
(2, 'Veterinario'),
(3, 'Usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_cita`
--

CREATE TABLE `tipo_cita` (
  `id_tipo_cita` int(11) NOT NULL,
  `nombre` varchar(70) NOT NULL,
  `precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_cita`
--

INSERT INTO `tipo_cita` (`id_tipo_cita`, `nombre`, `precio`) VALUES
(1, 'Consulta', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_mascotas`
--

CREATE TABLE `tipo_mascotas` (
  `id_tipo_mascota` int(11) NOT NULL,
  `tipo_mascota` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_mascotas`
--

INSERT INTO `tipo_mascotas` (`id_tipo_mascota`, `tipo_mascota`) VALUES
(1, 'Perro'),
(2, 'Gato');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `apellido` varchar(60) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(150) NOT NULL,
  `celular` varchar(10) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `rol_id` smallint(6) NOT NULL,
  `creado` bigint(20) NOT NULL,
  `actualizado` bigint(20) NOT NULL,
  `eliminado` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `password`, `celular`, `direccion`, `remember_token`, `rol_id`, `creado`, `actualizado`, `eliminado`) VALUES
(2, 'Felipe', 'Murillo', 'feliipemurillo993@gmail.com', 'sha256$6iSt2Yd1HRQaimFT$3f5c5dcbf4296d611b47c9819a4ae3479acd39702a2773778d071cc38e8c5b33', '3227837041', 'Armenia', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjoiZmVsaWlwZW11cmlsbG85OTNAZ21haWwuY29tIiwiZXhwIjoxNjMwODY5MDQ4fQ.6LWOfWTq51KU057xdfOPOIldJnIwdQW49604RtWAzQc', 3, 1629570612, 1629570612, NULL),
(3, 'Andrea', 'Mosquera', 'andreaMosquera@gmail.com', 'sha256$neHKKbSKfvjxoV9i$db261e48c3a58a97e8fbba78ffa103b9230c0614955c149d683da8c6c7075010', '3214010896', 'Armenia', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjoiYW5kcmVhTW9zcXVlcmFAZ21haWwuY29tIiwiZXhwIjoxNjI5NTc0MjgzfQ.taizCeCZq-8kHRz_qHOocmCPju9UXYMw9fTm-qchJg0', 3, 1629570683, 1629570683, NULL),
(4, 'Edgar', 'Pulido', 'edgarpulido@gmail.com', 'sha256$8Sbr14eIqOvevWi4$908f641abba71a17c56c6e5bfc072b8d5eb45ae88fc6c2ea30e1a605966fb9ca', '3227420783', 'Armenia', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjoiZWRnYXJwdWxpZG9AZ21haWwuY29tIiwiZXhwIjoxNjMwODY4OTMxfQ.O2q21bsDnUjrm1bk8HFN7oY3IpzRez7jZzp_W7YYsKM', 2, 1629570706, 1629570706, NULL),
(5, 'Juan', 'Yate', 'juanmanuelyatemendez@gmail.com', 'sha256$S5GWEu1co3AQtS8L$9f64c31dfc097f0400d4ac6a79e36d4bfd22c61b97f1c5396b50c5a43f6f9d6b', '3227879124', 'Armenia', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjoianVhbm1hbnVlbHlhdGVtZW5kZXpAZ21haWwuY29tIiwiZXhwIjoxNjMxMTY3MTEyfQ.Qanpyp0PdsVVS4qekmlMIrZ8mapiHmehgVeSCxupCsw', 1, 1629570763, 1629570763, NULL),
(6, 'Carlos Andrés', 'Méndez Ortíz', 'carlosandres@gmail.com', 'sha256$Ihum8cdh4dS711D0$5e7b196247b778ee3bb39684a3b802038be18580a30582ec02a6977c7d21c026', '3057514865', 'Armenia', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjoiY2FybG9zYW5kcmVzQGdtYWlsLmNvbSIsImV4cCI6MTYzMTI5NDI4MH0.jCHA7tBv2LDDIutexQqZu9ntm2YZIZ8Qj-sVNIyvfUc', 3, 1630898812, 1630898812, NULL),
(7, 'Rodrigo', 'López', 'rodri@gmail.com', 'sha256$QVkXx0ictq4CF5gs$60ed4fcee42c58f46c400e5312bc26051522cb7c00f4faf7f838d68dfe29cbda', '3217490372', 'Armenia', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjoicm9kcmlAZ21haWwuY29tIiwiZXhwIjoxNjMxMjk0MjIyfQ.YN7IlTLIHn6lDYHaceRyeFP438VUSfwBFh0Ire8-C2k', 2, 1630965496, 1630965496, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`id_agenda`),
  ADD KEY `agendamodel_veterinario_id` (`veterinario_id`),
  ADD KEY `agendamodel_usuario_id` (`usuario_id`);

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`id_cita`),
  ADD KEY `citamodel_agenda_id` (`agenda_id`),
  ADD KEY `citamodel_usuario_id` (`usuario_id`),
  ADD KEY `citamodel_paciente_id` (`paciente_id`);

--
-- Indices de la tabla `historias`
--
ALTER TABLE `historias`
  ADD PRIMARY KEY (`id_historia`),
  ADD KEY `historiasmodel_tipo_cita_id` (`tipo_cita_id`),
  ADD KEY `historiasmodel_mascota_id` (`mascota_id`),
  ADD KEY `historiasmodel_veterinario_id` (`veterinario_id`);

--
-- Indices de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  ADD PRIMARY KEY (`id_mascota`),
  ADD KEY `mascotamodel_tipo_mascota_id` (`tipo_mascota_id`),
  ADD KEY `mascotamodel_usuario_id` (`usuario_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_cita`
--
ALTER TABLE `tipo_cita`
  ADD PRIMARY KEY (`id_tipo_cita`);

--
-- Indices de la tabla `tipo_mascotas`
--
ALTER TABLE `tipo_mascotas`
  ADD PRIMARY KEY (`id_tipo_mascota`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usermodel_email` (`email`),
  ADD KEY `usermodel_rol_id` (`rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agenda`
--
ALTER TABLE `agenda`
  MODIFY `id_agenda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `id_cita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `historias`
--
ALTER TABLE `historias`
  MODIFY `id_historia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  MODIFY `id_mascota` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `tipo_cita`
--
ALTER TABLE `tipo_cita`
  MODIFY `id_tipo_cita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tipo_mascotas`
--
ALTER TABLE `tipo_mascotas`
  MODIFY `id_tipo_mascota` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `agenda`
--
ALTER TABLE `agenda`
  ADD CONSTRAINT `agenda_ibfk_1` FOREIGN KEY (`veterinario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `agenda_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `citas`
--
ALTER TABLE `citas`
  ADD CONSTRAINT `citas_ibfk_1` FOREIGN KEY (`agenda_id`) REFERENCES `agenda` (`id_agenda`),
  ADD CONSTRAINT `citas_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `citas_ibfk_3` FOREIGN KEY (`paciente_id`) REFERENCES `mascotas` (`id_mascota`);

--
-- Filtros para la tabla `historias`
--
ALTER TABLE `historias`
  ADD CONSTRAINT `historias_ibfk_1` FOREIGN KEY (`tipo_cita_id`) REFERENCES `tipo_cita` (`id_tipo_cita`),
  ADD CONSTRAINT `historias_ibfk_2` FOREIGN KEY (`mascota_id`) REFERENCES `mascotas` (`id_mascota`),
  ADD CONSTRAINT `historias_ibfk_3` FOREIGN KEY (`veterinario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `mascotas`
--
ALTER TABLE `mascotas`
  ADD CONSTRAINT `mascotas_ibfk_1` FOREIGN KEY (`tipo_mascota_id`) REFERENCES `tipo_mascotas` (`id_tipo_mascota`),
  ADD CONSTRAINT `mascotas_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
