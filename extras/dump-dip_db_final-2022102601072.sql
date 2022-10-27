--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4 (Ubuntu 10.4-0ubuntu0.18.04)
-- Dumped by pg_dump version 14.5

-- Started on 2022-10-26 01:07:03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 2938 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

--
-- TOC entry 196 (class 1259 OID 31890145)
-- Name: appointments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.appointments (
    id_appointment integer NOT NULL,
    doctor bigint DEFAULT 1 NOT NULL,
    patient bigint DEFAULT 1 NOT NULL,
    date_appointment timestamp without time zone DEFAULT now() NOT NULL,
    state boolean DEFAULT false
);


ALTER TABLE public.appointments OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 31890152)
-- Name: appointments_id_appointment_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.appointments_id_appointment_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.appointments_id_appointment_seq OWNER TO postgres;

--
-- TOC entry 2939 (class 0 OID 0)
-- Dependencies: 197
-- Name: appointments_id_appointment_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.appointments_id_appointment_seq OWNED BY public.appointments.id_appointment;


--
-- TOC entry 198 (class 1259 OID 31890154)
-- Name: doctors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.doctors (
    id_doctor integer NOT NULL,
    name_doctor character varying(200) NOT NULL,
    specialization integer,
    state boolean DEFAULT false
);


ALTER TABLE public.doctors OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 31890158)
-- Name: doctors_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.doctors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.doctors_id_seq OWNER TO postgres;

--
-- TOC entry 2940 (class 0 OID 0)
-- Dependencies: 199
-- Name: doctors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.doctors_id_seq OWNED BY public.doctors.id_doctor;


--
-- TOC entry 200 (class 1259 OID 31890160)
-- Name: illnesses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.illnesses (
    id_illness integer NOT NULL,
    name_illness text
);


ALTER TABLE public.illnesses OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 31890166)
-- Name: illness_id_illness_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.illness_id_illness_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.illness_id_illness_seq OWNER TO postgres;

--
-- TOC entry 2941 (class 0 OID 0)
-- Dependencies: 201
-- Name: illness_id_illness_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.illness_id_illness_seq OWNED BY public.illnesses.id_illness;


--
-- TOC entry 202 (class 1259 OID 31890168)
-- Name: patients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.patients (
    id_patient integer NOT NULL,
    name_patient character varying(200) NOT NULL,
    illness integer,
    state boolean DEFAULT false,
    biological_sex character varying,
    birthday integer,
    identification character varying NOT NULL
);


ALTER TABLE public.patients OWNER TO postgres;

--
-- TOC entry 2942 (class 0 OID 0)
-- Dependencies: 202
-- Name: COLUMN patients.biological_sex; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.patients.biological_sex IS 'M/F';


--
-- TOC entry 203 (class 1259 OID 31890175)
-- Name: patient_id_patient_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.patient_id_patient_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.patient_id_patient_seq OWNER TO postgres;

--
-- TOC entry 2943 (class 0 OID 0)
-- Dependencies: 203
-- Name: patient_id_patient_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.patient_id_patient_seq OWNED BY public.patients.id_patient;


--
-- TOC entry 204 (class 1259 OID 31890177)
-- Name: specializations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.specializations (
    id_specialization integer NOT NULL,
    name_specialization text
);


ALTER TABLE public.specializations OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 31890183)
-- Name: specializations_id_specialization_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.specializations_id_specialization_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.specializations_id_specialization_seq OWNER TO postgres;

--
-- TOC entry 2944 (class 0 OID 0)
-- Dependencies: 205
-- Name: specializations_id_specialization_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.specializations_id_specialization_seq OWNED BY public.specializations.id_specialization;


--
-- TOC entry 2781 (class 2604 OID 31890185)
-- Name: appointments id_appointment; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointments ALTER COLUMN id_appointment SET DEFAULT nextval('public.appointments_id_appointment_seq'::regclass);


--
-- TOC entry 2783 (class 2604 OID 31890186)
-- Name: doctors id_doctor; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctors ALTER COLUMN id_doctor SET DEFAULT nextval('public.doctors_id_seq'::regclass);


--
-- TOC entry 2784 (class 2604 OID 31890187)
-- Name: illnesses id_illness; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.illnesses ALTER COLUMN id_illness SET DEFAULT nextval('public.illness_id_illness_seq'::regclass);


--
-- TOC entry 2786 (class 2604 OID 31890188)
-- Name: patients id_patient; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patients ALTER COLUMN id_patient SET DEFAULT nextval('public.patient_id_patient_seq'::regclass);


--
-- TOC entry 2787 (class 2604 OID 31890189)
-- Name: specializations id_specialization; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specializations ALTER COLUMN id_specialization SET DEFAULT nextval('public.specializations_id_specialization_seq'::regclass);


--
-- TOC entry 2923 (class 0 OID 31890145)
-- Dependencies: 196
-- Data for Name: appointments; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.appointments VALUES (5, 5, 5, '2022-10-25 21:14:17.454748', true);


--
-- TOC entry 2925 (class 0 OID 31890154)
-- Dependencies: 198
-- Data for Name: doctors; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.doctors VALUES (5, 'CarlosG', 1, true);


--
-- TOC entry 2927 (class 0 OID 31890160)
-- Dependencies: 200
-- Data for Name: illnesses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.illnesses VALUES (1, 'Ceguera');


--
-- TOC entry 2929 (class 0 OID 31890168)
-- Dependencies: 202
-- Data for Name: patients; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.patients VALUES (5, 'Mateo', 1, true, 'M', 32, '123234534523');


--
-- TOC entry 2931 (class 0 OID 31890177)
-- Dependencies: 204
-- Data for Name: specializations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.specializations VALUES (1, 'Oftalmología');


--
-- TOC entry 2945 (class 0 OID 0)
-- Dependencies: 197
-- Name: appointments_id_appointment_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.appointments_id_appointment_seq', 5, true);


--
-- TOC entry 2946 (class 0 OID 0)
-- Dependencies: 199
-- Name: doctors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.doctors_id_seq', 5, true);


--
-- TOC entry 2947 (class 0 OID 0)
-- Dependencies: 201
-- Name: illness_id_illness_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.illness_id_illness_seq', 1, true);


--
-- TOC entry 2948 (class 0 OID 0)
-- Dependencies: 203
-- Name: patient_id_patient_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.patient_id_patient_seq', 7, true);


--
-- TOC entry 2949 (class 0 OID 0)
-- Dependencies: 205
-- Name: specializations_id_specialization_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.specializations_id_specialization_seq', 1, true);


--
-- TOC entry 2789 (class 2606 OID 31890191)
-- Name: appointments appointment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointment_pkey PRIMARY KEY (id_appointment);


--
-- TOC entry 2791 (class 2606 OID 31890193)
-- Name: doctors doctors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_pkey PRIMARY KEY (id_doctor);


--
-- TOC entry 2793 (class 2606 OID 31890195)
-- Name: illnesses illness_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.illnesses
    ADD CONSTRAINT illness_pkey PRIMARY KEY (id_illness);


--
-- TOC entry 2795 (class 2606 OID 31890197)
-- Name: patients patient_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patient_pkey PRIMARY KEY (id_patient);


--
-- TOC entry 2797 (class 2606 OID 31890199)
-- Name: specializations specialization_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specializations
    ADD CONSTRAINT specialization_pkey PRIMARY KEY (id_specialization);


--
-- TOC entry 2798 (class 2606 OID 31890200)
-- Name: appointments appointments_fk_d; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_fk_d FOREIGN KEY (doctor) REFERENCES public.doctors(id_doctor);


--
-- TOC entry 2799 (class 2606 OID 31890205)
-- Name: appointments appointments_fk_p; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_fk_p FOREIGN KEY (patient) REFERENCES public.patients(id_patient);


--
-- TOC entry 2800 (class 2606 OID 31890210)
-- Name: doctors doctors_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_fk FOREIGN KEY (specialization) REFERENCES public.specializations(id_specialization);


--
-- TOC entry 2801 (class 2606 OID 31890215)
-- Name: patients patients_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_fk FOREIGN KEY (illness) REFERENCES public.illnesses(id_illness);


-- Completed on 2022-10-26 01:07:04

--
-- PostgreSQL database dump complete
--

